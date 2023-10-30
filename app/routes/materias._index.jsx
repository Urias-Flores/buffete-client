import { useState, useEffect } from "react";
import {useActionData, useLoaderData} from "@remix-run/react";

//Components
import FormSubject from "../components/formSubject";
import ModalMessage from "../components/modalMessage";
import Subject from "../components/subject";
import Spinner from "../components/spinner";

//Server actions
import { getSubjects, addSubject, updateSubject } from "../services/subject.server";

//Styles
import clientStyle from '~/styles/clientes.css'
import {authenticator} from "../auth/auth.server";


export function links(){
  return [
    {
      rel: 'stylesheet',
      href: clientStyle
    }
  ]
}

export async function loader({ request }){
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return await getSubjects()
}

export async function action({request}){
  const form = await request.formData();

  const name = form.get('Name');

  const errors = {}
  if(request.method === 'POST' || request.method === 'PUT'){
    if(name.length === 0){
      errors.name = 'El nombre de la categoria es obligatorio';
    }
    if(name.length > 30){
      errors.name = 'El nombre no debe exceder los 30 caracteres';
    }
  }

  if(Object.keys(errors).length > 0){
    return {
      status: 'ERROR',
      errors: errors,
      data: null
    }
  }

  const subject = {
    Name: name,
    User: 1,
  }

  switch ( request.method ){
    case 'POST':
      const insertedSubject = await addSubject(subject);
      return {
        status: 'INSERTED',
        errors: {},
        data: insertedSubject
      }
    case 'PUT':
      const SubjectID = form.get('SubjectID')
      const updatedSubject = await updateSubject( SubjectID, subject )
      return {
        status: 'UPDATED',
        errors: {},
        data: updatedSubject
      }
    case 'DELETE':
      return {
        status: 'DELETED',
        errors: {},
        data: null
      }
    default: {
      throw new Error("Unexpected action");
    }
  }
}

export default function Materias (){
  const [ subjectSelected, setSubjectSelected ] = useState({})

  const [ showModalSubject, setShowModalSubject ] = useState(false);
  const [ showModalSubjectForEditing, setShowModalSubjectForEditing ] = useState(false);
  const [ showErrorSelectedMessage, setShowErrorSelectedMessage ] = useState(false)
  const [ showInsertedMessage, setShowInsertedMessage ] = useState(false);
  const [ showUpdatedMessage, setShowUpdatedMessage ] = useState(false);

  const loader = useLoaderData()
  const actionResult = useActionData();

  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    setSubjects(loader);
  }, [loader]);

  const searchSubjects = ( event ) => {
    const value = event.target.value.toString().toLowerCase()
    const actualizedSubjects= loader?.filter( subject => subject.Name.toLowerCase().includes(value) );
    setSubjects( actualizedSubjects );
  }

  const showFormSubject = ( isEditing ) => {
    if(isEditing){
      if(Object.keys(subjectSelected).length > 0){
        setShowModalSubjectForEditing(true)
      } else {
        setShowErrorSelectedMessage(true)
      }
    } else {
      setShowModalSubject(true)
    }
  }

  useEffect(() => {
    switch (actionResult?.status){
      case 'INSERTED':
        setShowModalSubject(false)
        setShowInsertedMessage(true)
        break;
      case 'UPDATED':
        setShowModalSubjectForEditing(false)
        setShowUpdatedMessage(true)
        break;
      default:
        break;
    }
  }, [actionResult]);

  return (
    <div className="container">

      { showModalSubject &&
        <FormSubject
          subject={{}}
          method={'POST'}
          errors={actionResult?.errors}
          setShowModalCategory={ setShowModalSubject }
        />
      }

      { showModalSubjectForEditing &&
        <FormSubject
          subject={subjectSelected}
          method={'PUT'}
          errors={actionResult?.errors}
          setShowModalCategory={ setShowModalSubjectForEditing }
        />
      }

      { showErrorSelectedMessage &&
        <ModalMessage
          features={
            {
              text: "Seleccione una materia de la lista",
              isOkCancel: false,
              indexIcon: 0,
              data: null
            }
          }
          setVisibleMessage={ setShowErrorSelectedMessage }
        />
      }

      { showInsertedMessage &&
        <ModalMessage
          features={
            {
              text: "La materia ha sido agregado exitosamente",
              isOkCancel: false,
              indexIcon: 2,
              data: null
            }
          }
          setVisibleMessage={ setShowInsertedMessage }
        />
      }

      { showUpdatedMessage &&
        <ModalMessage
          features={
            {
              text: "La materia ha sido modificada con exito",
              isOkCancel: false,
              indexIcon: 2,
              data: null
            }
          }
          setVisibleMessage={ setShowUpdatedMessage }
        />
      }

      <h1 className="heading">Lista de materias</h1>
      <h2 className="subheading">
        Gestiona las listas disponibles en la plataforma creando nuevas materias.
      </h2>

      <div className="search">
        <img src="/img/search.svg" alt="search"/>
        <input
          type="text"
          placeholder="Buscar"
          onChange={ (event) => { searchSubjects(event) } }
        />
      </div>

      <div className="actions">
        <button
          className="button"
          onClick={()=>{ showFormSubject(false) } }
          type="button"
        >
          <img src="/img/add.svg" alt="add"/>
          <p>Agregar materia</p>
        </button>

        <button
          className="button"
          onClick={ ()=>{ showFormSubject(true) } }
        >
          <img src="/img/edit.svg" alt="add"/>
          <p>Editar materia</p>
        </button>
      </div>

      <div className="list-scroll">
        { subjects.length > 0
          ?
            subjects.map( subject =>
              <Subject
                key={subject.SubjectID}
                subject={subject}
                subjectSelected={subjectSelected}
                setSubjectSelected={setSubjectSelected}
              />
            )
          :
            loader?.length === 0
              ?
              <p className='no-found'>Aún no hay materias registrados</p>
              :
              loader?.length > 0 && subjects.length === 0
                ?
                <p className='no-found'>No se pudieron encontrar materias</p>
                :
                <div className='center'>
                  <Spinner/>
                </div>
        }
      </div>
    </div>
  )
}

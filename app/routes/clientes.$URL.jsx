import {useEffect, useState} from "react";
import {useActionData, useLoaderData } from "@remix-run/react";

//Components
import SelectSubject from "../components/selectSubject";
import FormDocument from "../components/formDocument";
import ModalMessage from "../components/modalMessage";

//Server actions
import { addDocument, deleteDocument } from "../models/document.server";
import { getSubjects } from "../models/subject.server";
import { getClientByURL } from "../models/client.server";

//Styles
import styles from "../styles/clientes.css"

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader({params}){
  const { URL } = params
  const client = await getClientByURL(URL);
  const subjects = await getSubjects();
  return {
    client,
    subjects
  }
}

export async function action({request}){
  const documentFormData = await request.formData();
  const documentID = documentFormData.get('DocumentID')
  const name = documentFormData.get('Name');
  const subject = documentFormData.get('Subject');
  const file = documentFormData.get('File');

  const errors = {}
  if(request.method === 'POST'){
    if(name.length === 0){
      errors.name = 'El titulo del documento es obligatorio';
    }
    if(name.length > 30){
      errors.name = 'El titulo del documento no debe exceder las 30 letras'
    }
    if(parseInt(subject) === -1){
      errors.subject = 'La seleccion de una materia es obligatoria'
    }
    if(!file){
      errors.file = 'debe seleccionar un documento'
    }
  }

  if(Object.keys(errors).length > 0){
    return {
      state: 'ERROR',
      data: null,
      errors: errors
    }
  }

  switch ( request.method ){
    case 'POST': {
      const returnedDocument = await addDocument(documentFormData);
      return {
        state: 'INSERTED',
        data: returnedDocument,
        errors: {}
      }
    }
    case 'DELETE': {
      const returnedState = await deleteDocument( documentID )
      return {
        state: 'DELETED',
        data: returnedState,
        errors: {}
      }
    }
    default: {
      throw new Error("Unexpected action");
    }
  }
}

export default function ClientesClientID (){

  const { client, subjects } = useLoaderData();
  const actionResult = useActionData();
  const { ClientID, Name, Identity, Email, Phone, Address, Documents } = client[0]

  const [ showSubject, setShowSubject ] = useState(false);

  const [ showInsertedMessage, setShowInsertedMessage ] = useState(false);
  const [ showDeletedMessage, setShowDeletedMessage ] = useState(false);
  const [ showFormDocument, setShowFormDocument ] = useState(false);
  const [ showFormDeletedMessage, setShowFormDeletedMessage ] = useState(false);

  const [selectedDocument, setSelectedDocument] = useState({});

  const subjectsNamed = {}
  subjects.forEach(subject => {
    subjectsNamed[subject.SubjectID] = subject.Name
  })

  let record = []
  Documents.forEach( document => {
    let subjectExist = false
    record.forEach( item => {
      if(document.Subject === item.SubjectID){
        item.Documents = [...item.Documents, document]
        subjectExist = true
      }
    })
    if(!subjectExist){
      record.push({
        SubjectID: document.Subject,
        Name: subjectsNamed[document.Subject],
        Documents: [document]
      })
    }
  })

  useEffect(() => {
    switch (actionResult?.state){
      case 'INSERTED':
        setShowFormDocument(false)
        setShowInsertedMessage(true)
        break;
      case 'DELETED':
        setShowFormDeletedMessage(false)
        setShowDeletedMessage(true)
        break;
      default:
        break;
    }
  }, [actionResult])

  return (
    <div className="container">
      { showFormDocument &&
        <FormDocument
          method={'POST'}
          errors={actionResult?.errors}
          subjects={subjects}
          ClientID={ClientID}
          setShowModalDocument={ setShowFormDocument }
        />
      }

      { showFormDeletedMessage &&
        <ModalMessage
          features={
            {
              text: "¿Esta seguro de la eliminación del documento?",
              isOkCancel: true,
              indexIcon: 1,
              data: {
                name: 'DocumentID',
                value: selectedDocument?.DocumentID
              }
            }
          }
          setVisibleMessage={ setShowFormDeletedMessage }
        />
      }

      { showInsertedMessage &&
        <ModalMessage
          features={
            {
              text: "El documento ha sido agregado exitosamente",
              isOkCancel: false,
              indexIcon: 2,
              data: null
            }
          }
          setVisibleMessage={ setShowInsertedMessage }
        />
      }

      { showDeletedMessage &&
        <ModalMessage
          features={
            {
              text: "El documento ha sido eliminado exitosamente",
              isOkCancel: false,
              indexIcon: 2,
              data: null
            }
          }
          setVisibleMessage={ setShowDeletedMessage }
        />
      }

      <h1 className="heading">Información del cliente</h1>
      <h2 className="subheading">Información general y expediente completo del cliente</h2>

      <main className="grid-1-2">
        <section className="content">
          <h3>Información general</h3>
          <div className="data">
              <div className="item">
                <p>Nombre:</p>
                <b>{ Name }</b>
              </div>
              <div className="item">
                <p>Identidad:</p>
                <b>{ Identity }</b>
              </div>
              <div className="item">
                <p>Correo Electrónico:</p>
                <b>{ Email }</b>
              </div>
              <div className="item">
                <p>Telefóno:</p>
                <b>{ Phone }</b>
              </div>
              <div className="item">
                <p>Dirección:</p>
                <b>{ Address }</b>
              </div>
          </div>
        </section>

        <section className="record">
          <h3 className="record-title">Expediente</h3>

          <div className="actions">
            <button
              className="button"
              onClick={()=>{ setShowFormDocument(true) }}
              type="button"
            >
              <img src="/img/add.svg" alt="add"/>
              <p>Agregar documento</p>
            </button>
          </div>

          <div className="list-scroll">
            { Object.keys(record).length === 0
              ?
                <p className="no-found">
                  Aun no hay documentos disponibles...
                </p>
              :
                record.map( subject =>
                  <SelectSubject
                    key={subject.SubjectID}
                    subject={subject}
                    showSubject={showSubject}
                    setShowSubject={setShowSubject}
                    setShowFormDeletedMessage={setShowFormDeletedMessage}
                    setSelectedDocument={setSelectedDocument}
                  />
                )
            }
          </div>
        </section>
      </main>
    </div>
  )
}

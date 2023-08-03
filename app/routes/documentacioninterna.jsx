import {useState, useEffect} from "react";
import {useActionData, useLoaderData} from "@remix-run/react";

import { getInternalDocuments, addInternalDocument } from "../models/internaldocuments.server";

import ModalMessage from "../components/modalMessage";
import InternalDocument from "../components/internaldocument";
import FormInternalDocument from "../components/formInternalDocument";

export async function loader(){
  return await getInternalDocuments();
}

export async function action({ request }){
  const form = await request.formData();
  const name = form.get('Name');
  const file = form.get('File');

  const errors = {}
  if(request.method === 'POST'){
    if(name.length === 0){
      errors.name = 'El titulo del documento es obligatorio';
    }
    if(name.length > 80){
      errors.name = 'El titulo del documento no puede exceder las 80 letras';
    }
    if(!file){
      errors.file = 'Debe seleccionar un documento';
    }
  }

  if(Object.keys(errors).length > 0){
    return {
      status: 'ERROR',
      data: null,
      errors: errors
    }
  }

  switch (request.method){
    case 'POST':
      const internalDocumentResult = await addInternalDocument(form)
      return {
        status: 'INSERTED',
        data: internalDocumentResult,
        errors: {}
      }
    case 'DELETE':
      return {
        status: 'DELETED',
        data: null,
        errors: {}
      }
  }
}

export default function Documentacioninterna (){
  const [internalDocuments, setInternalDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState({});

  const [showInsertedMessage, setShowInsertedMessage] = useState(false)
  const [showDeletedMessage, setShowDeletedMessage] = useState(false)
  const [showFormDeletedMessage, setShowFormDeletedMessage] = useState(false);
  const [showFormInternalDocument, setShowFormInternalDocument] = useState(false)

  const loader = useLoaderData()
  const actionResult = useActionData()

  useEffect(() => {
    switch (actionResult?.status){
      case 'INSERTED':
        console.log(actionResult?.data)
        setShowFormInternalDocument(false);
        setShowInsertedMessage(true)
        break;
      case 'DELETED':
        setShowFormDeletedMessage(false);
        setShowDeletedMessage(true)
        break;
    }
  }, [actionResult]);


  useEffect(() => {
    setInternalDocuments(loader)
  }, [loader]);


  return (
    <div className="container">
      { showFormInternalDocument &&
        <FormInternalDocument
          method={'POST'}
          errors={actionResult?.errors}
          setShowModalInternalDocument={ setShowFormInternalDocument }
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
                name: 'InternalDocumentID',
                value: selectedDocument?.InternalDocumentID
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

      <h1 className="heading">Documentación interna</h1>
      <h2 className="subheading">Gestiona toda la documentacion interna del buffete</h2>

      <div className="search">
        <img src="/img/search.svg" alt="search"/>
        <input
          type="text"
          placeholder="Buscar"
        />
      </div>

      <div className='actions'>
        <button
          className="button"
          onClick={ ()=>{ setShowFormInternalDocument(true) } }
          type="button"
        >
          <img src="/img/add.svg" alt="add"/>
          <p>Agregar nuevo documento</p>
        </button>

        <button
          className="button"
          onClick={ ()=>{  } }
        >
          <img src="/img/edit.svg" alt="add"/>
          <p>Editar documento</p>
        </button>

        <button
          className="button"
          onClick={() => {  }}
          type="button"
          value="Eliminar"
        >
          <img src="/img/x.svg" alt="add"/>
          <p>Eliminar documento</p>
        </button>
      </div>

      <div className='list-scroll'>
        {
          internalDocuments.map( internalDocument =>
            <InternalDocument
              key={internalDocument.InternalDocumentID}
              InternalDocument={internalDocument}
              setSelectedDocument={setSelectedDocument}
              setShowFormDeletedMessage={setShowFormDeletedMessage}
            />
          )
        }
      </div>
    </div>
  )
}

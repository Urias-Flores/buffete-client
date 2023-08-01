import { useState, useEffect } from "react";
import { useActionData, useLoaderData } from "@remix-run/react";

//Components
import Document from "../components/document";
import ModalMessage from "../components/modalMessage";
import Spinner from "../components/spinner";

//Server Actions
import { getSubjectByName } from "../models/subject.server";
import { deleteDocument } from "../models/document.server";
import { formattedDate } from "../utils/helpers";

//Styles
import stylesSubject from '../styles/materias.css';
import stylesClient from '../styles/clientes.css';


export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesSubject
    },
    {
      rel: 'stylesheet',
      href: stylesClient
    }
  ]
}

export async function loader({params}){
  const { name } = params
  return await getSubjectByName(name)
}

export async function action({request}){
  const form = await request.formData()
  const DocumentID = form.get('DocumentID');

  switch ( request.method ){
    case 'DELETE':
      const resultData = await deleteDocument(DocumentID)
      return {
        status: 'DELETED',
        data: resultData,
        errors: {}
      }
    default:
      throw new Error("Unexpected action");
  }
}

export default function MateriasName (){
  const loader = useLoaderData();
  const actionResult = useActionData();

  const [ showFormDeletedMessage, setShowFormDeletedMessage ] = useState(false);
  const [ showDeletedMessage, setShowDeletedMessage ] = useState(false);
  const [ selectedDocument, setSelectedDocument ] = useState({});

  const { Name, Documents, CreatedDate, UpdatedDate } = loader
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    switch ( actionResult?.status ){
      case 'DELETED':
        setShowFormDeletedMessage(false)
        setShowDeletedMessage(true)
        break;
      default:
        break;
    }
  }, [actionResult]);

  useEffect(() => {
    setDocuments(loader?.Documents)
  }, [loader]);


  const searchDocument = ( event ) => {
    const value = event.target.value.toString().toLowerCase()
    const actualizedDocuments = loader?.Documents.filter( document => document.Name.toLowerCase().includes(value) );
    setDocuments( actualizedDocuments );
  }

  return (
    <div className='container'>
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

      <h1 className="heading">Informacion de la materia</h1>
      <h2 className="subheading">
        Gestiona aqui todos los documentos de la materia
      </h2>

      <main className='grid-1-2'>
        <section className="content">
          <h3>Información general</h3>
          <div className="data">
            <div className="item">
              <p>Nombre:</p>
              <b>{ Name }</b>
            </div>

            <div className="item">
              <p>Numero de documentos:</p>
              <b>{ Documents.length }</b>
            </div>

            <div className="item">
              <p>Fecha de creación:</p>
              <b>{ formattedDate(CreatedDate) }</b>
            </div>

            <div className="item">
              <p>Ultima modificación:</p>
              <b>{ formattedDate(UpdatedDate) }</b>
            </div>
          </div>
        </section>

        <section className="documents">
          <h3 className="documents-title">Documentos registrados</h3>

          <div className="search">
            <img src="/img/search.svg" alt="search"/>
            <input
              type="text"
              placeholder="Buscar..."
              onChange={ (event) => { searchDocument(event) } }
            />
          </div>

          <div className="list-scroll">
            {
              Object.keys(loader).length === 0
              ?
                <div className='center'>
                  <Spinner/>
                </div>
              :
                documents.length === 0
                ?
                  <p className="no-found">
                    Aun no hay documentos disponibles...
                  </p>
                :
                  documents.map( document =>
                    <Document
                      key={document.DocumentID}
                      document={document}
                      setSelectedDocument={setSelectedDocument}
                      setShowFormDeletedMessage={setShowFormDeletedMessage}
                    />
                  )
            }
          </div>
        </section>
      </main>
    </div>
  )
}

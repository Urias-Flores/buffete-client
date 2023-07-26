import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import styles from "../styles/clientes.css"
import SelectSubject from "../components/selectSubject";
import FormDocument from "../components/formDocument";
import { getSubjects } from "../models/subject.server";
import { getClientByURL } from "../models/client.server";

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

export default function ClientesClientID (){

  const { client, subjects } = useLoaderData()
  const { Name, Identity, Email, Phone, Address, Documents } = client[0]

  const [ showSubject, setShowSubject ] = useState(false);
  const [ showModalDocument, setShowModalDocument ] = useState(false);
  const [ showFormDocument, setShowFormDocument] = useState(false);
  const [documentURL, setDocumentURL] = useState('');

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

  return (
    <div className="container">
      { showFormDocument &&
        <FormDocument
          setShowModalDocument={setShowFormDocument}
        />
      }

      <h1 className="heading">Información del cliente</h1>
      <h2 className="subheading">Información general y expediente completo del cliente</h2>

      <main className="main">
        <section className="general-information">
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

          <div className="record-categories">
            { Object.keys(record).length === 0
              ?
              <p className="record-category">
                Aun no hay documentos disponibles...
              </p>
              :
              record.map( subject =>
                <SelectSubject
                  key={subject.SubjectID}
                  subject={subject}
                  showSubject={showSubject}
                  setShowSubject={setShowSubject}
                />
              )
            }
          </div>
        </section>
      </main>
    </div>
  )
}

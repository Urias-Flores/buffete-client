import {useLoaderData} from "@remix-run/react";
import {getClientByURL} from "../models/client.server";
import styles from "../styles/clientes.css"
import CategoriaExpediente from "../components/categoria-expediente";
import {useState} from "react";
import FormDocument from "../components/formDocument";

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
  return await getClientByURL(URL);
}

export default function ClientesClientID (){

  const { Name, Identity, Phone, Email, Address  } = useLoaderData()
  const [showCategory, setShowCategory] = useState(0);
  const [showSubcategory, setShowSubcategory] = useState(0);
  const [showModalDocument, setShowModalDocument] = useState(false);

  return (
    <div className="container">
      { showModalDocument &&
        <FormDocument
          setShowModalDocument={setShowModalDocument}
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
              onClick={()=>{ setShowModalDocument(true) }}
              type="button"
            >
              <img src="/img/add.svg" alt="add"/>
              <p>Agregar documento</p>
            </button>
          </div>

          <div className="record-categories">
            <CategoriaExpediente
              category={{ Name:'Materia 1', CategoryID: 1}}
              showCategory={showCategory}
              setShowCategory={setShowCategory}
              showSubcategory={showSubcategory}
              setShowSubcategory={setShowSubcategory}
            />

            <CategoriaExpediente
              category={{ Name:'Materia 2', CategoryID: 2}}
              showCategory={showCategory}
              setShowCategory={setShowCategory}
              showSubcategory={showSubcategory}
              setShowSubcategory={setShowSubcategory}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

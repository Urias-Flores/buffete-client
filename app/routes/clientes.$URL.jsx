import {useLoaderData} from "@remix-run/react";
import {getClientByURL} from "../models/client.server";
import styles from "../styles/clientes.css"
import CategoriaExpediente from "../components/categoria-expediente";
import {useState} from "react";

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

  return (
    <div className="container">
        <h1 className="heading">Información del cliente</h1>
        <h2 className="subheading">Información general y expediente completo del cliente</h2>

        <section className="general-information">
            <h3>Información general</h3>
            <div className="grid">
              <div>
                <p className="data">Nombre: <b>{ Name }</b></p>
                <p className="data">Identidad: <b>{ Identity }</b></p>
                <p className="data">Correo Electrónico: <b>{ Email }</b></p>
              </div>
              <div>
                <p className="data">Telefóno: <b>{ Phone }</b></p>
                <p className="data">Dirección: <b>{ Address }</b></p>
              </div>
            </div>
        </section>

        <section className="record">
          <h3 className="record-title">Expediente</h3>

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
    </div>
  )
}

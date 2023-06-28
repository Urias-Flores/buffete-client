import {useState} from "react";
import {useLoaderData} from "@remix-run/react";

import FormClient from "~/components/formClient.jsx"
import Message from "../components/message";
import styles from '~/styles/clientes.css'
import Cliente from "~/components/cliente";
import { getClients } from "~/models/client.server";

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  return await getClients()
}

export default function Clientes (){
  const [isVisibleFormCliente, setVisibleFormClient] = useState(false);
  const [isVisibleFormClienteForEditing, setVisibleFormClientForEditing] = useState(false);

  const [isVisibleMessage, setVisibleMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isOkCancel, setIsOkCancel] = useState(false);

  const [clientSelected, setClientSelected] = useState({});
  const clients = useLoaderData()

  const showFormCliente = ( isEditign ) => {
    if(isEditign){
      if(Object.keys(clientSelected).length > 0){
        setVisibleFormClientForEditing(true)
      } else {
        setMessage("Debe seleccionar un cliente se la lista")
        setIsOkCancel(false)
        setVisibleMessage(true)
      }
    } else {
      setVisibleFormClient(true)
    }
  }

  const showEliminatedClient = () => {
    if(Object.keys(clientSelected).length <= 0){
      setMessage("Debe seleccionar un cliente de la lista inferior")
      setIsOkCancel(false)
      setVisibleMessage(true)
    } else {
      setMessage("Esta seguro de la eliminacion del cliente seleccionado")
      setIsOkCancel(true)
      setVisibleMessage(true)
    }
  }

  return (
      <div className="container">

        { isVisibleFormCliente &&
          <FormClient
            setVisibleFormClient = {setVisibleFormClient}
            setVisibleFormClientForEditing = {setVisibleFormClientForEditing}
          />
        }

        { isVisibleFormClienteForEditing &&
          <FormClient
            setVisibleFormClient = {setVisibleFormClient}
            setVisibleFormClientForEditing = {setVisibleFormClientForEditing}
            client = {clientSelected}
          />
        }

        { isVisibleMessage &&
          <Message
            isOkCancel={isOkCancel}
            text={message}
            setVisibleMessage={setVisibleMessage}
            indexIcon={1}
          />
        }

        <h1 className="heading">Gestiona tus clientes</h1>
        <p className="subheading">
          Lista completa de los clientes registrados por ti, puedes escribir y filtrar para una busqueda mas rapida.
        </p>

        <div className="search">
          <img src="/img/search.svg" alt="image-search"/>
          <input type="text" placeholder="Buscar"/>
        </div>

        <div className="actions">
          <input
            className="button"
            onClick={()=>{ showFormCliente(false) }}
            type="button"
            value="Agregar nuevo"
          />

          <input
            className="button"
            onClick={()=>{ showFormCliente(true) }}
            type="submit"
            value="Editar"
          />

          <input
            className="button"
            onClick={() => { showEliminatedClient() }}
            type="submit"
            value="Eliminar"
          />
        </div>

        <div className="clients">
          { clients.map( client => <Cliente
            key = {client.ClientID}
            client={client}
            clientSelected={clientSelected}
            setClientSelected={setClientSelected}
          /> ) }
        </div>
      </div>
    )
}

import {useEffect, useState} from "react";
import {useActionData, useLoaderData} from "@remix-run/react";

//Components
import FormClient from "../components/formClient.jsx"
import ModalMessage from "../components/modalMessage";
import Cliente from "../components/client";
import Spinner from "../components/spinner";

//Server actions
import { getClients, addClient, updateClient, deleteClient } from "../models/client.server";
import { deleteDocument } from "../models/document.server";

//Styles
import styles from '~/styles/clientes.css'

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

export async function action({ request }){
  const form = await request.formData();

  const clientID = form.get('ClientID')
  const documentID = form.get('DocumentID')
  const name = form.get('name')
  const identity = form.get('identity')
  const phone = form.get('phone')
  const email = form.get('email')
  const address = form.get('address')

  //Validation
  let errors = {}
  if (request.method === 'POST' || request.method === 'PUT'){
    if(name.length === 0){
      errors.name =  'El nombre del cliente es obligatorio'
    }
    if(name.length > 80){
      errors.name = 'El nombre debe contener menos de 80 caracteres'
    }
    if(typeof name !== 'string'){
      errors.name = 'El nombre debe ser un texto'
    }

    //Identity validation
    if(identity.length === 0){
      errors.identity = 'La identidad es obligatorio'
    }
    if(identity.length > 13 || identity.length < 13){
      errors.identity = 'La identidad debe contener 13 caracteres'
    }

    //Phone number validation
    if(phone.length !== 8 && phone.length !== 11){
      errors.phone = 'El numero telefónico debe contener 8 o 11 caracteres'
    }
    if(phone.length === 0){
      errors.phone = 'El numero telefónico es obligatorio'
    }

    //Email validation
    const regex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if(regex.test(email)){
      errors.email = 'El correo electrónico ingresado no es valido'
    }
    if(email.length === 0){
      errors.email = 'El correo electrónico es obligatorio'
    }

    //Address validation
    if(address.length === 0){
      errors.address = 'La dirección del cliente es obligatoria'
    }
  }

  if(Object.keys(errors).length > 0){
    return {
      state: 'ERROR',
      data: {},
      errors: errors
    };
  }

  const client = {
    User: 2,
    Name: name,
    Identity: identity,
    Phone: phone,
    Email: email,
    Address: address
  }

  switch ( request.method ){
    case 'POST': {
      const returnedClient = await addClient(client);
      return {
        state: 'INSERTED',
        data: returnedClient,
        errors: {}
      }
    }
    case 'PUT': {
      client.ClientID = parseInt(clientID)
      const returnedState = await updateClient(clientID, client);
      return {
        state: 'UPDATED',
        data: returnedState,
        errors: {}
      }
    }
    case 'DELETE': {
      let returnedState;
      if(clientID){
        returnedState = await deleteClient( clientID )
        return {
          state: 'CLIENT DELETED',
          data: returnedState,
          errors: {}
        }
      } else if (documentID) {
        returnedState = await deleteDocument(documentID)
        return {
          state: 'DOCUMENT DELETED',
          data: returnedState,
          errors: {}
        }
      }
      return {
        state: 'UNKNOWN',
        data: null,
        errors: {
          unknown: 'Ha sucedido un error inesperado'
        }
      }
    }
    default: {
      throw new Error("Unexpected action");
    }
  }
}

export default function Clientes (){
  //States for forms modals
  const [isVisibleFormCliente, setVisibleFormClient] = useState(false);
  const [isVisibleFormClienteForEditing, setVisibleFormClientForEditing] = useState(false);
  const [isVisibleDeleteClient, setVisibleDeleteClient] = useState(false);

  //State for message modals
  const [insertedMessage, showInsertedMessage] = useState(false);
  const [updatedMessage, showUpdatedMessage] = useState(false);
  const [deleteClientMessage, showDeleteClientMessage] = useState(false);
  const [errorSelectedMessage, showErrorSelectedMessage] = useState(false);

  //State for client and document selection
  const [clients, setClients] = useState([]);
  const [clientSelected, setClientSelected] = useState({});

  const loader = useLoaderData();
  const actionResult = useActionData();


  useEffect(() => {
    switch (actionResult?.state){
      case 'INSERTED':
        setVisibleFormClient(false)
        showInsertedMessage(true)
        break;
      case 'UPDATED':
        setVisibleFormClientForEditing(false)
        showUpdatedMessage(true)
        break;
      case 'CLIENT DELETED':
        setVisibleDeleteClient(false)
        showDeleteClientMessage(true)
        break;
      default:
        break;
    }
  }, [actionResult])

  useEffect(() => {
    setClients(loader)
  }, [loader]);

  const showFormCliente = ( isEditign ) => {
    if(isEditign){
      if(Object.keys(clientSelected).length > 0){
        setVisibleFormClientForEditing(true)
      } else {
        showErrorSelectedMessage(true)
      }
    } else {
      setVisibleFormClient(true)
    }
  }

  const showEliminatedClient = () => {
    if(Object.keys(clientSelected).length <= 0){
      showErrorSelectedMessage(true)
    } else {
      setVisibleDeleteClient(true)
    }
  }

  const searchClient = ( event ) => {
    const value = event.target.value.toString().toLowerCase()
    const actualizedClients = loader.filter( client => client.Name.toLowerCase().includes(value) );
    setClients( actualizedClients );
  }

  return (
      <div className="container">

        { isVisibleFormCliente  &&
          <FormClient
            method={'POST'}
            errors={ actionResult?.errors }
            setVisibleFormClient = { setVisibleFormClient }
          />
        }

        { isVisibleFormClienteForEditing  &&
          <FormClient
            method={'PUT'}
            errors={ actionResult?.errors }
            client = { clientSelected }
            setVisibleFormClient = { setVisibleFormClientForEditing }
          />
        }

        { isVisibleDeleteClient &&
          <ModalMessage
            features={
              {
                text: "¿Esta seguro de la eliminación del cliente?",
                isOkCancel: true,
                indexIcon: 1,
                data: {
                  name: 'ClientID',
                  value: clientSelected.ClientID
                }
              }
            }
            setVisibleMessage={ setVisibleDeleteClient }
          />
        }

        { errorSelectedMessage &&
          <ModalMessage
            features={
              {
                text: "Seleccione un cliente de la lista",
                isOkCancel: false,
                indexIcon: 0,
                data: null
              }
            }
            setVisibleMessage={ showErrorSelectedMessage }
          />
        }

        { insertedMessage &&
          <ModalMessage
            features={
              {
                text: "El cliente ha sido ingresado exitosamente",
                isOkCancel: false,
                indexIcon: 2,
                data: null
              }
            }
            setVisibleMessage={ showInsertedMessage }
          />
        }

        { updatedMessage &&
          <ModalMessage
            features={
              {
                text: "El cliente ha sido actualizado exitosamente",
                isOkCancel: false,
                indexIcon: 2,
                data: null
              }
            }
            setVisibleMessage={ showUpdatedMessage }
          />
        }

        { deleteClientMessage &&
          <ModalMessage
            features={
              {
                text: "El cliente ha sido eliminado exitosamente",
                isOkCancel: false,
                indexIcon: 2,
                data: null
              }
            }
            setVisibleMessage={ showDeleteClientMessage }
          />
        }

        <h1 className="heading">Gestiona tus clientes</h1>
        <p className="subheading">
          Lista completa de los clientes registrados por ti, puedes escribir y filtrar para una busqueda mas rapida.
        </p>

        <div className='top-options'>
          <div className="search">
            <img src="/img/search.svg" alt="search"/>
            <input
              type="text"
              placeholder="Buscar"
              onChange={ (event) => { searchClient( event) } }
            />
          </div>

          <div className="actions">
            <button
              className="button"
              onClick={ ()=>{ showFormCliente(false) } }
              type="button"
            >
              <img src="/img/add.svg" alt="add"/>
              <p>Agregar</p>
            </button>

            <button
              className="button"
              onClick={ ()=>{ showFormCliente(true) } }
            >
              <img src="/img/edit.svg" alt="add"/>
              <p>Editar</p>
            </button>

            <button
              className="button"
              onClick={() => { showEliminatedClient() }}
              type="button"
              value="Eliminar"
            >
              <img src="/img/x.svg" alt="add"/>
              <p>Eliminar</p>
            </button>
          </div>
        </div>

        <div className="list-scroll">
          { clients.length > 0
            ?
              clients.map( client =>
                <Cliente
                  key = {client.ClientID}
                  client={client}
                  clientSelected={clientSelected}
                  setClientSelected={setClientSelected}
                />
              )
            :
              <div className='center'>
                <Spinner/>
              </div>
          }
        </div>
      </div>
    )
}

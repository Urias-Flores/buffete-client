import {useState} from "react";
import {useActionData, useLoaderData} from "@remix-run/react";

import FormClient from "~/components/formClient.jsx"
import Message from "../components/message";
import styles from '~/styles/clientes.css'
import Cliente from "~/components/cliente";
import { addClient, getClients, deleteClient } from "../models/client.server";
import {json, redirect} from "@remix-run/node";

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

  const id = form.get('id')
  const clientID = form.get('ClientID')
  const name = form.get('name')
  const identity = form.get('identity')
  const phone = form.get('phone')
  const email = form.get('email')
  const address = form.get('address')

  //Validation
  const errors = {}
  //Name validation
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

  if(Object.keys(errors).length){
    return errors
  }

  const client = {
    User: 2,
    Name: name,
    Identity: identity,
    Email: phone,
    Phone: email,
    Address: address
  }

  if( request.method === 'POST' ){
    console.log(client)
    console.log('Guardando')
  }

  if( request.method === 'PUT' ){
    client.ClientID = parseInt(clientID)
    console.log(client)
    console.log('Modificando')
  }

  if( request.method === 'DELETE' ){
    console.log(id)
    console.log('Eliminando')
  }

  return redirect('/clientes');
}

export default function Clientes (){
  //States for modals
  const [isVisibleFormCliente, setVisibleFormClient] = useState(false);
  const [isVisibleFormClienteForEditing, setVisibleFormClientForEditing] = useState(false);
  const [isVisibleDeleteClient, setVisibleDeleteClient] = useState(false);
  const [errorSelectedMessage, showErrorSelectedMessage] = useState(false);

  //State for client selectioned
  const [clientSelected, setClientSelected] = useState({});

  const loader = useLoaderData();
  const errors = useActionData();

  const [clients, setClients] = useState(loader);
  const [search, setSearch] = useState("");

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
    setSearch(event.target.value)
    const actualizedClients = loader.filter( client => client.Name.toLowerCase().includes(event.target.value) );
    setClients( actualizedClients );
  }

  return (
      <div className="container">

        { isVisibleFormCliente &&
          <FormClient
            setVisibleFormClient = { setVisibleFormClient }
            method={"POST"}
            errors={ errors }
          />
        }

        { isVisibleFormClienteForEditing &&
          <FormClient
            setVisibleFormClient = { setVisibleFormClientForEditing }
            client = { clientSelected }
            method={"PUT"}
            errors={ errors }
          />
        }

        { isVisibleDeleteClient &&
          <Message
            features={
              {
                text: "¿Esat seguro de la eliminación del cliente?",
                isOkCancel: true,
                indexIcon: 1,
                data: clientSelected.ClientID
              }
            }
            setVisibleMessage={ setVisibleDeleteClient }
          />
        }

        { errorSelectedMessage &&
          <Message
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

        <h1 className="heading">Gestiona tus clientes</h1>
        <p className="subheading">
          Lista completa de los clientes registrados por ti, puedes escribir y filtrar para una busqueda mas rapida.
        </p>

        <div className="search">
          <img src="/img/search.svg" alt="image-search"/>
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={ (event) => {
                searchClient( event)
              }
            }/>
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
            type="button"
            value="Editar"
          />

          <input
            className="button"
            onClick={() => { showEliminatedClient() }}
            type="button"
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

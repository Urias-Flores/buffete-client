import { useState } from "react";
import {Form, useNavigation} from "@remix-run/react";

export default function FormClient ({ method, errors, client = {}, setVisibleFormClient }){

  const navigation = useNavigation();

  const ClientID = client?.ClientID
  const [name, setName] = useState(client?.Name || '');
  const [identity, setIdentity] = useState(client?.Identity || '');
  const [phone, setPhone] = useState(client?.Phone || '');
  const [email, setEmail] = useState(client?.Email || '');
  const [address, setAddress] = useState(client?.Address || '');

  return (
    <div className="modal">
      <Form
        className="form"
        method={method}
      >
        <img
          src="/img/x.svg"
          className="button-close"
          alt="close"
          onClick={
            ()=> {
              setVisibleFormClient(false)
            }
          }
        />

        <h1 className="heading">{Object.keys(client).length === 0 ? 'Agregar nuevo cliente' : 'Modificar cliente' }</h1>
        <h2 className="subheading">
          Ingresa toda la información del cliente para {Object.keys(client).length === 0 ? 'agregarlo' : 'modificarlo'}
        </h2>
        <br/>

        <div className="inputs">
          <div className="input">
            <input name="ClientID" type="hidden" value={ClientID}/>

            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Nombre del cliente"
              onChange={(e) => { setName(e.target.value) }}
              value={name}
            />
            { errors?.name ? <p className="error">{errors.name}</p> : null }
          </div>

          <div className="input">
            <label htmlFor="identity">Identidad</label>
            <input
              name="identity"
              id="identity"
              type="number"
              placeholder="Identidad del cliente"
              onChange={(e) => { setIdentity(e.target.value) }}
              value={identity}
            />
            { errors?.identity ? <p className="error">{errors.identity}</p> : null }
          </div>

          <div className="input">
            <label htmlFor="phone">Número telefónico</label>
            <input
              name="phone"
              id="phone"
              type="number"
              maxLength={15}
              placeholder="Número telefónico del cliente"
              onChange={(e) => { setPhone(e.target.value) }}
              value={phone}
            />
            { errors?.phone ? <p className="error">{errors.phone}</p> : null }
          </div>

          <div className="input">
            <label htmlFor="email">Correo electrónico</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Correo electrónico del cliente"
              onChange={(e) => { setEmail(e.target.value) }}
              value={ email }
            />
            { errors?.email ? <p className="error">{errors.email}</p> : null }
          </div>

          <div className="input">
            <label htmlFor="address">Domicilio</label>
            <input
              name="address"
              id="address"
              type="text"
              placeholder="Dirección del cliente"
              onChange={(e) => { setAddress(e.target.value) }}
              value={ address }
            />
            { errors?.address ? <p className="error">{errors.address}</p> : null }
          </div>
        </div>

        <div className='loading'>
          <input className="button" type="submit" value='Guardar'/>
          { navigation?.state !== 'idle' &&
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          }
        </div>
      </Form>
    </div>
  )
}

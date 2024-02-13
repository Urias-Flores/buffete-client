import { useState } from "react";
import { Form, useNavigation } from "@remix-run/react";

import Spinner from './spinner';
import Input from './input';
import CloseButton from "./close_button";

export default function FormClient ({ method, errors, client = {}, setVisibleFormClient }: any){

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
        <CloseButton
          setVisibleForm={setVisibleFormClient}
        />

        <h1 className="heading">{Object.keys(client).length === 0 ? 'Nuevo cliente' : 'Modificar cliente' }</h1>
        <h2 className="subheading">
          Ingresa toda la información del cliente para {Object.keys(client).length === 0 ? 'agregarlo' : 'modificarlo'}
        </h2>

        <div className="inputs">
          <input name="ClientID" type="hidden" value={ClientID}/>

          <Input
            title='Nombre'
            name='name'
            placeholder='Nombre del cliente'
            value={name}
            setValue={setName}
            error={errors?.name}
          />

          <Input
            title='Identidad'
            name='identity'
            type='number'
            placeholder='Identidad del cliente'
            value={identity}
            setValue={setIdentity}
            error={errors?.identity}
          />

          <Input
            title='Numero telefonico'
            name='phone'
            type='tel'
            maxLength={15}
            placeholder='Numero telefonico del cliente'
            value={phone}
            setValue={setPhone}
            error={errors?.phone}
          />

          <Input
            title='Correo electronico'
            name='email'
            type='email'
            placeholder='Correo electronico del cliente'
            value={email}
            setValue={setEmail}
            error={errors?.email}
          />

          <Input
            title='Domicilio'
            name='address'
            placeholder='Dirección del cliente'
            value={address}
            setValue={setAddress}
            error={errors?.address}
          />
        </div>

        <div className='loading'>
          <input className="button" type="submit" value='Guardar'/>
          { navigation?.state !== 'idle' &&
            <Spinner/>
          }
        </div>
      </Form>
    </div>
  )
}

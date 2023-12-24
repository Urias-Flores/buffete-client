import React from "react";
import {Form, useActionData, useNavigation} from "@remix-run/react";

import Spinner from "../spinner";
import Input from "../input";

export default function EnterEmail ({name, setName, email, setEmail, phone, setPhone}: any){
  const action: any = useActionData();
  const navigation = useNavigation();

  return (
    <Form  className='form' method='POST'>
      <h1 className='heading'>Crea tu nueva cuenta</h1>
      <p className='subheading'>LLena todos los campos para crear tu nueva cuenta</p>
      <br/>

      <div className='inputs'>
        <input type="hidden" name='step' value='2'/>

        <Input
          title='Nombre'
          name='name'
          placeholder='Ingresa tu nombre'
          type='text'
          value={name}
          setValue={setName}
          error=''
        />

        <Input
          title='Correo electrónico'
          name='email'
          placeholder='Tu corrreo electrónico'
          type='email'
          value={email}
          setValue={setEmail}
          error=''
        />

        <Input
          title='Numero telefonico'
          name='phone'
          placeholder='Tu numero telefonico'
          type='tel'
          value={phone}
          setValue={setPhone}
          error=''
        />

        <p className='error'>{ action?.ERROR }</p>

        <div className='loading'>
          <input className="button" type="submit" value='Continuar'/>
          { navigation?.state !== 'idle' &&
            <Spinner/>
          }
        </div>
      </div>
    </Form>
  )
}

import React from "react";
import Input from "../input";
import {Form, useNavigation, useActionData} from "@remix-run/react";
import Spinner from "../spinner";

export default function EnterPassword ({
   userID, name, email, phone, password, setPassword, repeatPassword, setRepeatPassword
}: any){
  const action: any = useActionData();
  const navigation = useNavigation();

  return (
    <Form  className='form' method='POST'>
      <h1 className='heading'>Agrega tu contraseña</h1>
      <p className='subheading'>Para finalizar de crear tu cuenta agrega una contraseña</p>
      <br/>

      <input type="hidden" name='step' value='3'/>
      <input type="hidden" name='UserID' value={userID}/>
      <input type="hidden" name='name' value={name}/>
      <input type="hidden" name='email' value={email}/>
      <input type="hidden" name='phone' value={phone}/>

      <div className='inputs'>
        <Input
          title='Contraseña'
          name='password'
          placeholder='Ingresa tu contraseña'
          type='password'
          value={password}
          setValue={setPassword}
          error=''
        />

        <Input
          title='Repite la contraseña'
          name='repeat-password'
          placeholder='Repite tu contraseña'
          type='password'
          value={repeatPassword}
          setValue={setRepeatPassword}
          error=''
        />

        <p className='error'>{ action?.ERROR }</p>

        <div className='loading'>
          <input className="button" type="submit" value='Crear cuenta'/>
          { navigation?.state !== 'idle' &&
            <Spinner/>
          }
        </div>
      </div>
    </Form>
  )
}

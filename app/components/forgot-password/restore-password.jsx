import {useActionData, useNavigation} from "@remix-run/react";

import Input from "../input";
import Spinner from "../spinner";
import React from "react";

export default function RestorePassword ({ password, setPassword, repeatPassword, setRepeatPassword, UserID }){
  const action = useActionData();
  const navigation = useNavigation();

  return (
    <>
      <h1 className='heading'>Restablecer contraseña</h1>
      <p className='subheading'>
        Ingrese su nueva contraseña y vuelva a repetirla para finalizar
        con el restablecimiento de la contraseña de su cuenta.
      </p>
      <br/>

      <section className='inputs'>
        <input type="hidden" name='step' value={3}/>
        <input type="hidden" name='UserID' value={UserID}/>

        <Input
          title='Nueva contraseña'
          name='password'
          placeholder='Ingrese la contraseña...'
          type='password'
          value={password}
          setValue={setPassword}
          error=''
        />

        <Input
          title='Repita la nueva contraseña'
          name='repeat-password'
          placeholder='Repita la contraseña...'
          type='password'
          value={repeatPassword}
          setValue={setRepeatPassword}
          error=''
        />

        <p className='error'>{ action?.ERROR }</p>

        <div className='loading'>
          <input className="button" type="submit" value='Verificar'/>
          { navigation?.state !== 'idle' &&
            <Spinner/>
          }
        </div>
      </section>
    </>
  )
}

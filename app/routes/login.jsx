import { useState } from "react";
import {Form, useNavigation} from '@remix-run/react'

import Input from '~/components/input.jsx'
import Spinner from "../components/spinner";

export default function Login (){
  const navigation = useNavigation()

  const [user, setUser] = useState('');
  const [password, setPassword] = useState()

  return (
    <main className='container'>
      <Form className='form login'>
        <h1 className="heading">Iniciar sesión</h1>
        <h2 className="subheading">Llena todos los campos para iniciar sesión</h2><br/>

        <div className='inputs'>
          <Input
            title='Nombre de usuario o correo electronico'
            name='user'
            placeholder='Nombre de usuario o correo electronico'
            value={user}
            setValue={setUser}
            error={''}
          />

          <Input
            title='Contraseña'
            name='password'
            placeholder='Tu contraseña'
            type='password'
            value={password}
            setValue={setPassword}
            error={''}
          />

          <div className='loading'>
            <input className="button" type="submit" value='Iniciar Sesión'/>
            { navigation?.state !== 'idle' &&
              <Spinner/>
            }
          </div>
        </div>
      </Form>
    </main>
  )
}

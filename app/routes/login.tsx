import { useState } from "react";
import {Form, Link, useLoaderData, useNavigation} from '@remix-run/react'
import { authenticator } from "../auth/auth.server";

import Input from '../components/input.jsx'
import Spinner from "../components/spinner";
import {getSession} from "../auth/session.server";
import {json} from "@remix-run/node";

export async function loader({ request }: any){
  await authenticator.isAuthenticated( request, {
    successRedirect: '/',
  })

  const session = await getSession(request.headers.get("cookie"));
  const error = session.get(authenticator.sessionErrorKey);
  return json({ error });
}

export async function action({ request, context }: any){
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    throwOnError: true,
    context,
  });
}

export default function Login (){
  const navigation = useNavigation();
  const loader: any = useLoaderData();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <main className='login-modal'>
      <Form className='form' method='POST'>
        <h1 className="heading">
          Iniciar sesión
        </h1>
        <h2 className="subheading">
          Llena todos los campos para iniciar sesión
        </h2>
        <br/>

        <div className='inputs'>
          <Input
            title='Nombre de usuario o correo electronico'
            name='email'
            placeholder='Tu correo electronico'
            value={email}
            setValue={setEmail}
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

          <div className='account-options'>
            <Link to='/create-account' className='option'>¿No tienes una cuenta? Crea una</Link>
            <Link to='/forgot-password' className='option'>¿Olvidaste tu contraseña? Recuperala</Link>
          </div>

          <p className='error'>{ loader?.error?.message }</p>

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

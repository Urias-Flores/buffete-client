import { useState, useEffect } from "react";
import {Form, useActionData, useNavigate} from '@remix-run/react'

import {getUsers, getUsersByID, updateUser} from "../services/user.server";

import EnterEmail from "../components/forgot-password/enter-email";
import EnterCode from "../components/forgot-password/enter-code";
import RestorePassword from "../components/forgot-password/restore-password";
import {generateRandomCode} from "../utils/helpers";
import {sendRecoverAccountEmail} from "../services/email.server";


export async function action({ request }){
  const form = await request.formData();
  const step = parseInt(form.get('step'));
  const users = await getUsers();
  let UserID, user;

  switch ( step ){
    case 1:
      const email = form.get('email');

      if(email.length === 0){
        return { STATUS: 'ERROR', ERROR: 'El correo electrónico es obligatorio' }
      }

      const selectedUser = users.filter( user => user.Email === email);

      if(selectedUser.length === 0){
        return { STATUS: 'ERROR', ERROR: 'No se encontró ningún usuario con el correo electrónico ingresado' }
      }

      const token = generateRandomCode(6);
      user = {
        UserID: selectedUser[0]?.UserID,
        Token: token
      }

      await updateUser(user);

      await sendRecoverAccountEmail( selectedUser[0]?.Name, token, selectedUser[0]?.Email )

      return {
        STATUS: 'VALIDATED',
        DATA: selectedUser[0]?.UserID
      }
    case 2:
      UserID = form.get('UserID');

      const letter0 = form.get('letter0');
      const letter1 = form.get('letter1');
      const letter2 = form.get('letter2');
      const letter3 = form.get('letter3');
      const letter4 = form.get('letter4');
      const letter5 = form.get('letter5');

      const code = [ letter0, letter1, letter2, letter3, letter4, letter5 ];

      for( let i = 0; i < 6; i++ ){
        if(code[i]?.length === 0){
          return {
            STATUS: 'ERROR',
            ERROR: 'Todos los dígitos son obligatorios'
          }
        }
      }

      const currentUser = await getUsersByID(UserID);
      const completeCode = code.join('');

      if( currentUser?.Token === completeCode ){
        return {
          STATUS: 'CODEPASSED',
        }
      }

      return {
        STATUS: 'ERROR',
        ERROR: 'El código ingresado es incorrecto'
      }
    case 3:
      UserID = form.get('UserID')
      const password = form.get('password');
      const repeatPassword = form.get('repeat-password')

      if( password.length === 0 ){
        return { STATUS: 'ERROR', ERROR: 'La contraseña es obligatorio' }
      }
      if( password.length > 0 && password.length < 8){
        return { STATUS: 'ERROR', ERROR: 'La contraseña debe contener al menos 8 caracteres' }
      }
      if( repeatPassword.length === 0 ){
        return { STATUS: 'ERROR', ERROR: 'Por favor, repita la contraseña' }
      }
      if( repeatPassword.length > 0 && repeatPassword.length < 8){
        return { STATUS: 'ERROR', ERROR: 'La contraseña debe contener al menos 8 caracteres' }
      }
      if( password !== repeatPassword ){
        return { STATUS: 'ERROR', ERROR: 'Las contraseñas no coinciden' }
      }

      user = {
        UserID: UserID,
        Password: password,
        Token: null
      }

      await updateUser( user )

      return {
        STATUS: 'RESTORED'
      }
    default: {
      return {
        STATUS: 'ERROR',
        ERROR: 'No valid option'
      }
    }
  }
}


export default function ForgotPassword (){
  const action = useActionData();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [userID, setUserID] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  useEffect(() => {
    switch( action?.STATUS ){
      case 'VALIDATED':
        setUserID( action?.DATA )

        setStep(2);
        break;
      case 'CODEPASSED':
        setStep(3);
        break;
      case 'RESTORED':
        navigate('/login');
        break;
    }
  }, [action]);


  return (
    <main className='login-modal'>
      <Form className='form' method='POST'>
        { step === 1
          ?
            <EnterEmail
              email={email}
              setEmail={setEmail}
            />
          :
          step === 2
          ?
            <EnterCode
              UserID={userID}
            />
          :
            <RestorePassword
              password={password}
              setPassword={setPassword}
              repeatPassword={repeatPassword}
              setRepeatPassword={setRepeatPassword}
              UserID={userID}
            />
        }

      </Form>

      <div className='steps'>
        <p className={`step ${step === 1 ? 'active' : ''}`}>1</p>
        <div className='step-line'></div>
        <p className={`step ${step === 2 ? 'active' : ''}`}>2</p>
        <div className='step-line'></div>
        <p className={`step ${step === 3 ? 'active' : ''}`}>3</p>
      </div>
    </main>
  )
}

import { useEffect, useState } from "react";
import { useActionData, useNavigate } from '@remix-run/react';

import { getUsers, updateUser } from "../services/user.server";

import EnterCode from '../components/create-account/enter-code';
import EnterEmail from "../components/create-account/enter-email";
import EnterPassword from "../components/create-account/enter-password";

export async function action({ request }: any){
  const form = await request.formData();

  const step = form.get('step');
  let name, email, phone;

  let error = '';
  switch ( parseInt(step) ){
    case 1:
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

      const users = await getUsers();
      const selectedUser = users.filter( (user: { Token: string; }) => user.Token === code.join('') )

      if( selectedUser.length > 0 ){
        return {
          STATUS: 'VALIDATED',
          DATA: selectedUser[0],
        }
      }

      return{
        STATUS: 'ERROR',
        ERROR: 'Token no valido'
      }
    case 2:
      name = form.get('name');
      email = form.get('email');
      phone = form.get('phone');

      if( name.length === 0 ){
        return { ERROR: 'Tu nombre es obligatorio' }
      }
      if( email.length === 0 ){
        return { ERROR: 'El correo electrónico es obligatorio' }
      }
      if(phone.length !== 8){
        return { ERROR: 'El número telefónico debe contener 8 caracteres' }
      }

      if(error.length > 0){
        return {
          STATUS: 'ERROR',
          ERROR: error
        }
      }

      return {
        STATUS: 'PENDING',
        DATA: {
          Name: name,
          Email: email,
          Phone: phone
        }
      }
    case 3:
      const userID = form.get('UserID');
      name = form.get('name');
      email = form.get('email');
      phone = form.get('phone');
      const password = form.get('password');
      const repeatPassword = form.get('repeat-password');

      if( password.length === 0 ){
        return { ERROR: 'La contraseña es obligatoria' }
      }
      if( password.length < 8 ){
        return { ERROR: 'La contraseña debe contener al menos 8 caracteres' }
      }
      if( repeatPassword.length === 0 ){
        return { ERROR: 'Ingresa nuevamente tu contraseña' }
      }
      if( repeatPassword.length < 8 ){
        return { ERROR: 'La contraseña debe contener al menos 8 caracteres' }
      }
      if( password !== repeatPassword ){
        return { ERROR: 'Las contraseñas ingresadas no coinciden' }
      }

      const user = {
        UserID: userID,
        Name: name,
        Email: email,
        Phone: phone,
        Password: password,
        Token: null,
        State: 1,
      }
      try{
        await updateUser(user);

        return {
          STATUS: 'CREATED'
        }
      } catch( error ) {
        return {
          STATUS: 'ERROR',
          ERROR: 'Error al crear el usuario',
          MESSAGE: error
        }
      }
    default:
      throw new Error('Invalid detected option')
  }
}

export default function CreateAccount (){
  const navigate = useNavigate()
  const action: any = useActionData();

  const [step, setStep] = useState(1);

  const [userID, setUserID] = useState(-1)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  useEffect(() => {
    switch ( action?.STATUS ){
      case 'VALIDATED':
        setUserID( action?.DATA.UserID );

        setStep(2);
        break;
      case 'PENDING':
        setName(action?.DATA.Name );
        setEmail(action?.DATA.Email );
        setPhone(action?.DATA.Phone );

        setStep(3);
        break;
      case 'CREATED':
        navigate('/login');
        break;
    }
  }, [action]);

  return (
    <main className='login-modal'>

      { step === 1 &&
        <EnterCode/>
      }

      { step === 2 &&
        <EnterEmail
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
      }

      { step === 3 &&
        <EnterPassword
          userID={userID}
          name={name}
          email={email}
          phone={phone}
          password={password}
          setPassword={setPassword}
          repeatPassword={repeatPassword}
          setRepeatPassword={setRepeatPassword}
        />
      }

      <div className='steps'>
        <p className={`step ${step === 1 ? 'active' : ''}`}>1</p>
        <div className='step-line'></div>
        <p className={`step ${step === 2 ? 'active' : ''}`}>2</p>
        <div className='step-line'></div>
        <p className={`step ${step === 3 ? 'active' : ''}`}>2</p>
      </div>
    </main>
  )
}

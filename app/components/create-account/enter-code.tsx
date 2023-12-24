import React from "react";
import {Link, Form, useNavigation, useActionData} from "@remix-run/react";

import Spinner from "../spinner";

export default function EnterCode (){
  const action: any = useActionData();
  const navigation = useNavigation();

  const inputs: any = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ];

  const handleInput = (e: any, index: number) => {
    if(e.target.value.length === e.target.maxLength){
      e.target.value = e.target.value.toString().toUpperCase();
      inputs[index + 1]?.current.focus();
    }
  };

  return (
    <Form className='form' method='POST'>
      <h1 className='heading'>Ingresa tu código de creación</h1>
      <h2 className='subheading'>
        Para continuar y crear tu cuenta ingresa el código de creación de cuenta
        Otorgado por tu administrador.
      </h2>
      <br/>

      <section className='inputs'>
        <input type="hidden" name='step' value={1}/>

        <p className='subheading'>Código de creación</p>
        <div className='code'>
          { inputs.map((input: any, index: number) =>
            <input
              key={index}
              type="text"
              placeholder='-'
              className='code-letter'
              ref={input}
              name={`letter${index}`}
              maxLength={1}
              onChange={(e)=> { handleInput(e, index) }}
            />
          )
          }
        </div>

        <div className='account-options'>
          <Link to='/login' className='option'>¿Ya tienes una cuenta? Inicia sesión</Link>
          <Link to='/forgot-password' className='option'>¿Olvidaste tu contraseña? Recuperala</Link>
        </div>

        <p className='error'>{ action?.ERROR }</p>

        <div className='loading'>
          <input
            className="button"
            type="submit"
            value='Continuar'
            onClick={ () => {  } }
          />
          { navigation?.state !== 'idle' &&
            <Spinner/>
          }
        </div>
      </section>
    </Form>
  )
}

import { useState, useEffect } from "react";
import { Form, useNavigation } from '@remix-run/react'
import Spinner from "./spinner";

export default function ModalCodeShow ({ setStep, accessLevelSelected }: any){
  const navigation = useNavigation();

  const [code, setCode] = useState('000000');

  function generateRandomCode(length: number) {
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
      const randomCharacter = character[Math.floor(Math.random() * character.length)];
      code += randomCharacter;
    }
    return code;
  }

  useEffect(() => {
    setCode( generateRandomCode(6) );
  }, []);

  return (
    <div className='modal'>
      <div className='message'>
        <img
          src="/img/x.svg"
          className="button-close"
          alt="close"
          onClick={
            ()=> {
              setStep(0)
            }
          }
        />

        <div className='message-information'>
          <p className='just-text'>
            Recuerda no compartir el código generado con nadie diferente
            al usuario que requiere crear la cuenta.
          </p>

          <p>El código generado es el siguiente:</p>

          <div className='code'>
            <p className='code-letter'>{code[0]}</p>
            <p className='code-letter'>{code[1]}</p>
            <p className='code-letter'>{code[2]}</p>
            <p className='code-letter'>{code[3]}</p>
            <p className='code-letter'>{code[4]}</p>
            <p className='code-letter'>{code[5]}</p>
          </div>

          <Form method='POST'>
            <input type="hidden" name='action' value='CREATE-USER'/>
            <input type="hidden" name='Token' value={code}/>
            <input type="hidden" name='AccessLevel' value={accessLevelSelected}/>

            <div className='loading'>
              <input
                className="button"
                type="submit"
                value='Guardar'
              />
              { navigation?.state !== 'idle' &&
                <Spinner/>
              }
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

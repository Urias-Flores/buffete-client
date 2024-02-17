import CloseButton from "./close_button";
import { useState, useEffect } from "react";
import { Form, useNavigation } from '@remix-run/react'
import Spinner from "./spinner";

export default function ModalCodeShow ({ setStep, accessLevelSelected }: any){
  const navigation = useNavigation();

  const [code, setCode] = useState('000000');
  const [beVisible, setBevisible] = useState(false);

  useEffect( () => {
    setTimeout(() => {
      setBevisible(true);
    }, 100)
  }, [])

  const hideModal = () => {
    setBevisible(false);
    setTimeout(() => {
      setStep(0);
    }, 300)
  }

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
    <div className={`modal ${beVisible ? 'active' : ''}`}>
      <div className='message'>
        <CloseButton
          hideModal={hideModal}
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

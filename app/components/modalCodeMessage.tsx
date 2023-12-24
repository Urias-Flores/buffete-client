import { useState } from "react";

import Dropdownlist from "./dropdownlist";
import { accessLevel } from "../utils/helpers";

export default function ModalCodeMessage ({ currentUser, setStep, accessLevelSelected, setAccessLevelSelected }: any){
  const [error, setError] = useState('')


  const validateAccessLevelSelected = () => {
    if( accessLevelSelected === -1) {
      setError('Debe seleccionar el nivel de acceso del usuario');
    } else if( accessLevelSelected === 'A' || accessLevelSelected === 'R' || accessLevelSelected === 'N' ) {
      setStep(2)
    } else {
      setError('El nivel de acceso seleccionado no es valido')
    }
  }

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
            Para la creación de un nuevo usuario debera proporcionarle el código de creación
            al usuario en cuestión con el cual podrá llenar el formulario de registro.
          </p>

          <div className='inputs'>
            <Dropdownlist
              title='Nivel de acceso otorgado'
              name='user'
              items={ currentUser?.AccessLevel === 'R' ? accessLevel : [accessLevel[0]] }
              error=''
              setItemSelected={ setAccessLevelSelected }
            />
          </div>

          <p className='error'>{ error }</p>

          <div className="buttons">
            <input
              className="button"
              type="submit"
              value="Aceptar"
              onClick={ () => { validateAccessLevelSelected() } }
            />

            <input
              className="button"
              type="button"
              onClick={ () => { setStep(0) } }
              value="Cancelar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

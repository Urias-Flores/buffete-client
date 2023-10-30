import { useState, useEffect } from "react";
import {useActionData, useLoaderData} from "@remix-run/react";

import {createPreviousUser, getUsers} from "../services/user.server";
import { authenticator } from "../auth/auth.server";

import User from '../components/user';
import Spinner from "../components/spinner";
import ModalCodeMessage from "../components/modalCodeMessage";
import ModalCodeShow from "../components/modalCodeShow";
import ModalMessage from "../components/modalMessage";

export async function loader({ request }){
  const currentUser = await authenticator.isAuthenticated( request )
  const users = await getUsers();

  if(currentUser?.AccessLevel === 'N'){
    throw new Error('Acceso no permitido')
  }

  return users.filter( user => currentUser.UserID !== user.UserID && user.Name.length > 0)
}

export async function action({ request }){
  const form = await request.formData();
  const currentAction = form.get('action');

  switch ( currentAction ){
    case 'CREATE-USER':
      const token = form.get('Token');
      const accessLevelSelected = form.get('AccessLevel');

      const result = await createPreviousUser(token, accessLevelSelected);

      return {
        STATUS: 'CODE-SAVE',
        RESULT: result,
        ERROR: '',
      }
    default:
      throw new Error('Invalid selected option')
  }
}

export default function Usuarios (){
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState({})
  const [accessLevelSelected, setAccessLevelSelected] = useState('')

  //Modal states
  const [addUserStep, setAddUserStep] = useState(0);
  const [showMessageAddUser, setShowMessageAddUser] = useState(false);

  const loader = useLoaderData()
  const action = useActionData();

  useEffect(() => {
    switch( action?.STATUS ){
      case 'CODE-SAVE':
        setAddUserStep(0);
        setAccessLevelSelected('');

        setShowMessageAddUser(true);
        break;
    }
  }, [action]);

  useEffect(() => {
    setUsers(loader)
  }, [loader]);

  const searchClient = ( event ) => {
    const value = event.target.value.toString().toLowerCase()
    const actualizedUsers = loader?.filter( user => user.Name.toLowerCase().includes(value) );
    setUsers( actualizedUsers );
  }

  return (
    <main className='container'>

      { addUserStep === 1 &&
        <ModalCodeMessage
          setStep={ setAddUserStep }
          accessLevelSelected={ accessLevelSelected }
          setAccessLevelSelected={ setAccessLevelSelected }
        />
      }

      { addUserStep === 2 &&
        <ModalCodeShow
          setStep={ setAddUserStep }
          accessLevelSelected={ accessLevelSelected }
        />
      }

      { showMessageAddUser &&
        <ModalMessage
          features={
            {
              text: "El código generado ha sido almacenamdo exitosamente",
              isOkCancel: false,
              indexIcon: 2,
              data: null
            }
          }
          setVisibleMessage={ setShowMessageAddUser }
        />
      }

      <h1 className="heading">Gestiona los usuarios</h1>
      <p className="subheading">
        Lista completa de los usuarios registrados, puedes escribir y
        filtrar para una búsqueda mas rápida.
      </p>

      <div className='top-options'>
        <div className="search">
          <img src="/img/search.svg" alt="search"/>
          <input
            type="text"
            placeholder="Buscar"
            onChange={ (event) => { searchClient( event) } }
          />
        </div>
      </div>

      <div className="actions">
        <button
          className="button"
          onClick={ ()=>{
              setAddUserStep(1)
            }
          }
          type="button"
        >
          <img src="/img/add.svg" alt="add"/>
          <p>Agregar</p>
        </button>

        <button
          className="button"
          onClick={ ()=>{  } }
        >
          <img src="/img/edit.svg" alt="add"/>
          <p>Inhabilitar</p>
        </button>

        <button
          className="button"
          onClick={() => {  }}
          type="button"
          value="Eliminar"
        >
          <img src="/img/x.svg" alt="add"/>
          <p>Eliminar</p>
        </button>
      </div>

      <div className="list-scroll">
        {
          users.length > 0
            ?
            users.map( user =>
              <User
                key = {user.UserID}
                user={user}
                userSelected={userSelected}
                setUserSelected={setUserSelected}
              />
            )
            :
            loader?.length === 0
              ?
              <p className='no-found'>Aún no hay usuarios registrados</p>
              :
              loader?.length > 0 && users.length === 0
                ?
                <p className='no-found'>No se pudieron encontrar usuarios</p>
                :
                <div className='center'>
                  <Spinner/>
                </div>
        }
      </div>
    </main>
  )
}

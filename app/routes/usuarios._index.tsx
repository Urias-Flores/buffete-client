import { useState, useEffect } from "react";
import {useActionData, useLoaderData} from "@remix-run/react";

//Server
import {createPreviousUser, deleteUser, getUsers, getUsersByID, updateUser} from "../services/user.server";
import { authenticator } from "../auth/auth.server";

//Components
import User from '../components/user';
import Spinner from "../components/spinner";
import ModalCodeMessage from "../components/modalCodeMessage";
import ModalCodeShow from "../components/modalCodeShow";
import ModalMessage from "../components/modalMessage";

export async function loader({ request }: any){
  const currentUser: any = await authenticator.isAuthenticated( request )
  const users = await getUsers();

  if(currentUser?.AccessLevel === 'N'){
    throw new Error('Acceso no permitido')
  }

  return {
    currentUser: currentUser,
    users: users.filter( (user: { UserID: any; Name: string | any[]; }) => currentUser.UserID !== user.UserID && user.Name.length > 0)
  }

}

export async function action({ request }: any){
  const form = await request.formData();
  const currentAction = form.get('action');

  if(currentAction){
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
        throw new Error('Invalid option')
    }
  } else {
    const userID = form.get('UserID');
    switch (request.method) {
      case 'PUT':
        const userInactivated = await getUsersByID(userID)
        const inactivatedUser = {
          UserID: userID,
          State: userInactivated.State === 1 ? 0 : 1,
        }

        const resultUpdate = await updateUser(inactivatedUser)
        return {
          STATUS: 'USER STATE CHANGE',
          RESULT: resultUpdate,
          ERROR: '',
        }
      case 'DELETE':
        const user = await getUsersByID(userID);
        if(user?.Documents.length > 0
        || user?.Dates.length > 0
        || user?.InternalDocuments.length > 0
        || user?.Subjects.length > 0
        || user?.Clients.length > 0){
          return {
            STATUS: 'USER HAVE DATA',
            RESULT: null,
            ERROR: '',
          }
        }

        const resultDeleted = await deleteUser(userID);
        return {
          STATUS: 'DELETED',
          RESULT: resultDeleted,
          ERROR: '',
        }
      default:
        throw new Error('Invalid method')
    }
  }
}

export default function Usuarios (){
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected]: any = useState({})
  const [accessLevelSelected, setAccessLevelSelected] = useState('')

  //Modal states
  const [addUserStep, setAddUserStep] = useState(0);
  const [errorSelectedMessage, showErrorSelectedMessage] = useState(false);
  const [showMessageAddUser, setShowMessageAddUser] = useState(false);
  const [showMessageDeleteUser, setShowMessageDeleteUser] = useState(false);
  const [showMessageEnableUser, setShowMessageEnableUser] = useState(false);
  const [showMessageUserDeleted, setShowMessageUserDeleted] = useState(false);
  const [showMessageUserHavaData, setShowMessageUserHavaData] = useState(false);
  const [showMessageUserStateChange, setShowMessageUserStateChange] = useState(false);

  const loader: any = useLoaderData();
  const action: any = useActionData();

  useEffect(() => {
    switch( action?.STATUS ){
      case 'CODE-SAVE':
        setAddUserStep(0);
        setAccessLevelSelected('');

        setShowMessageAddUser(true);
        break;
      case 'DELETED':
        setUserSelected({});

        setShowMessageUserDeleted(true);
        setShowMessageDeleteUser(false);
        break;
      case 'USER HAVE DATA':
        setUserSelected({});

        setShowMessageDeleteUser(false);
        setShowMessageUserHavaData(true);
        break;
      case 'USER STATE CHANGE':
        setUserSelected({});

        setShowMessageEnableUser(false);
        setShowMessageUserStateChange(true);
    }
  }, [action]);

  useEffect(() => {
    setUsers(loader?.users)
  }, [loader]);

  const showEliminatedClient = () => {
    if(Object.keys(userSelected).length <= 0){
      showErrorSelectedMessage(true)
    } else {
      setShowMessageDeleteUser(true)
    }
  }

  const showDisableUser = () => {
    if(Object.keys(userSelected).length <= 0){
      showErrorSelectedMessage(true)
    } else {
      setShowMessageEnableUser(true)
    }
  }

  const searchClient = ( event: any ) => {
    const value = event.target.value.toString().toLowerCase()
    const actualizedUsers = loader?.users?.filter( (user: { Name: string; }) => user.Name.toLowerCase().includes(value) );
    setUsers( actualizedUsers );
  }

  return (
    <main className='container'>
      { errorSelectedMessage &&
        <ModalMessage
          features={
            {
              text: "Seleccione un cliente de la lista",
              isOkCancel: false,
              indexIcon: 0,
              data: null
            }
          }
          setVisibleMessage={ showErrorSelectedMessage }
        />
      }

      { addUserStep === 1 &&
        <ModalCodeMessage
          currentUser={loader?.currentUser}
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
              text: "El código generado ha sido almacenado exitosamente",
              isOkCancel: false,
              indexIcon: 2,
              data: null
            }
          }
          setVisibleMessage={ setShowMessageAddUser }
        />
      }

      { showMessageDeleteUser &&
        <ModalMessage
          features={
            {
              text: "¿Esta seguro que desea eliminar el usuario seleccionado?",
              isOkCancel: true,
              indexIcon: 2,
              data: {
                name: 'UserID',
                value: userSelected.UserID
              }
            }
          }
          setVisibleMessage={ setShowMessageDeleteUser }
        />
      }

      { showMessageEnableUser &&
        <ModalMessage
          features={
            {
              text: `¿Esta seguro que desea ${ userSelected.State === 1 ? 'Inactivar' : 'Activar' } el usuario seleccionado?`,
              isOkCancel: true,
              indexIcon: 2,
              data: {
                method: 'PUT',
                name: 'UserID',
                value: userSelected.UserID
              }
            }
          }
          setVisibleMessage={ setShowMessageEnableUser }
        />
      }

      { showMessageUserDeleted &&
        <ModalMessage
          features={
            {
              text: "El usuario ha sido eliminado exitosamente",
              isOkCancel: false,
              indexIcon: 2,
              data: null
            }
          }
          setVisibleMessage={ setShowMessageUserDeleted }
        />
      }



      { showMessageUserHavaData &&
        <ModalMessage
          features={
            {
              text: "El usuario no pudo ser eliminado ya que se encontraron datos (documentos, citas, clientes, documentos internos, materias) registrados para este usuario",
              isOkCancel: false,
              indexIcon: 0,
              data: null
            }
          }
          setVisibleMessage={ setShowMessageUserHavaData }
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
          onClick={ ()=>{ showDisableUser() } }
        >
          <img src="/img/edit.svg" alt="add"/>
          <p>Inhabilitar</p>
        </button>

        <button
          className="button"
          onClick={() => { showEliminatedClient() }}
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
            users.map( (user: {UserID: number}) =>
              <User
                key = {user.UserID}
                user={user}
                userSelected={userSelected}
                setUserSelected={setUserSelected}
              />
            )
            :
            loader?.users?.length === 0
              ?
              <p className='no-found'>Aún no hay usuarios registrados</p>
              :
              loader?.users?.length > 0 && users.length === 0
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

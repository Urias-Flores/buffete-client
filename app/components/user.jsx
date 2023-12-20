import {Link} from "@remix-run/react";

export default function User ({ user, userSelected, setUserSelected }){
  const { UserID, Name, Email, State, URL } = user

  return (
    <div className="item-list">
      <Link to={`/usuarios/${URL}`} className="item-main">
        <img src="/img/user-circle.svg" alt="user"/>
        <div className="item-information">
          <h4>{Name}</h4>
          <div>
            <p>{Email}</p>
            <div className='state'>
              <div className={`point ${State === 0 ? '' : 'active'}`}></div>
              <p>{State === 1 ? 'Habilitado' : 'Inhabilitado'}</p>
            </div>
          </div>
        </div>
      </Link>

      <img
        className="check"
        src={`/img/${ userSelected.UserID === UserID ? 'square-check.svg' : 'square.svg'}`}
        onClick={()=> { setUserSelected(userSelected.UserID  === UserID ? {} : user) }}
        alt="square"
      />
    </div>
  )
}

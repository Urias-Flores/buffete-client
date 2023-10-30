import {Link} from "@remix-run/react";

export default function User ({ user, userSelected, setUserSelected }){
  const { UserID, Name, Email, URL } = user

  return (
    <div className="item-list">
      <Link to={`/usuarios/${URL}`} className="item-main">
        <img src="/img/user-circle.svg" alt="user"/>
        <div className="item-information">
          <h4>{Name}</h4>
          <p>{Email}</p>
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

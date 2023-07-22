import { Link } from '@remix-run/react'

export default function Cliente ({ client, clientSelected, setClientSelected }){
  const { Name, Identity, ClientID, URL } = client

  return (
      <div className="client">
        <Link to={`/clientes/${URL}`} className="client-main">
          <img src="/img/user-circle.svg" alt="user"/>
          <div className="client-information">
            <h4>{Name}</h4>
            <p>{Identity}</p>
          </div>
        </Link>

        <div
          onClick={()=> { setClientSelected(clientSelected.ClientID  === ClientID ? {} : client) }}
        >
          <img
            className="check"
            src={`/img/${ clientSelected.ClientID === ClientID ? 'square-check.svg' : 'square.svg'}`}
            alt="square"
          />
        </div>
      </div>
    )
}

import { Link } from '@remix-run/react'

export default function Client ({ client, clientSelected, setClientSelected }: any){
  const { Name, Identity, ClientID, URL } = client

  return (
      <div className="item-list">
        <Link to={`/clientes/${URL}`} className="item-main">
          <img src="/img/user-circle.svg" alt="user"/>
          <div className="item-information">
            <h4>{Name}</h4>
            <p>{Identity}</p>
          </div>
        </Link>

        <img
          className="check"
          src={`/img/${ clientSelected.ClientID === ClientID ? 'square-check.svg' : 'square.svg'}`}
          onClick={()=> { setClientSelected(clientSelected.ClientID  === ClientID ? {} : client) }}
          alt="square"
        />
      </div>
    )
}

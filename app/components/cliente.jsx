export default function Cliente ({ client, clientSelected, setClientSelected }){
  const { Name, Identity, ClientID } = client

  return (
      <div className="client">
        <div className="client-main">
          <img src="/img/user-circle.svg" alt="image-user"/>
          <div className="client-information">
            <h4>{Name}</h4>
            <p>{Identity}</p>
          </div>
        </div>

        <div onClick={()=> { setClientSelected(clientSelected.ClientID  === ClientID ? {} : client) }}>
          <img
            className="check"
            src={`/img/${ clientSelected.ClientID === ClientID ? 'square-check.svg' : 'square.svg'}`}
            alt="image-square"
          />
        </div>
      </div>
    )
}

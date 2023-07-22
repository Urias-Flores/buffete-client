export async function getClients(){
  const response = await fetch(`${process.env.API_URL}/client`);
  return await response.json()
}

export async function getClientByURL( URL ){
  const response = await fetch(`${process.env.API_URL}/client/URL/${URL}`);
  return await response.json()
}

export async function  addClient( client ){
  const response = await fetch(`${process.env.API_URL}/client`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function  updateClient( ClientID, client ){
  const response = await fetch(`${process.env.API_URL}/client/${ClientID}`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function deleteClient( ClientID ){
  const response = await fetch( `${process.env.API_URL}/client/${ClientID}`, {
    method: 'DELETE'
  })
  return await response.json()
}

export async function getClients(){
  const response = await fetch(`${process.env.API_URL}/clients`);
  return await response.json()
}

export async function getClientByID(clientID){
  const response = await fetch(`${process.env.API_URL}/clients/${clientID}`);
  return await response.json()
}

export async function  addClient( client ){
  const response = await fetch(`${process.env.API_URL}/clients`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function  updateClient( client ){
  const response = await fetch(`${process.env.API_URL}/clients`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function deleteClient( ClientID ){
  const response = await fetch( `${process.env.API_URL}/clients/${ClientID}`, {
    method: 'DELETE'
  })
  return await response.json()
}

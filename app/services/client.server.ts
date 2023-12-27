export async function getClients(){
  const response = await fetch(`https://ufsoft.com:8000/api/clients`);
  return await response.json()
}

export async function getClientByID(clientID: string){
  const response = await fetch(`https://ufsoft.com:8000/api/clients/${clientID}`);
  return await response.json()
}

export async function  addClient( client: any ){
  const response = await fetch(`https://ufsoft.com:8000/api/clients`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function  updateClient( client: any ){
  const response = await fetch(`https://ufsoft.com:8000/api/clients`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function deleteClient( ClientID: string ){
  const response = await fetch( `https://ufsoft.com:8000/api/clients/${ClientID}`, {
    method: 'DELETE'
  })
  return await response.json()
}

export async function getClients(){
  const response = await fetch(`https://grupo-sosamorales.com/api/clients`);
  return await response.json()
}

export async function getClientByID(clientID: string){
  const response = await fetch(`https://grupo-sosamorales.com/api/clients/${clientID}`);
  return await response.json()
}

export async function  addClient( client: any ){
  const response = await fetch(`https://grupo-sosamorales.com/api/clients`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function  updateClient( client: any ){
  const response = await fetch(`https://grupo-sosamorales.com/api/clients`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

export async function deleteClient( ClientID: string ){
  const response = await fetch( `https://grupo-sosamorales.com/api/clients/${ClientID}`, {
    method: 'DELETE'
  })
  return await response.json()
}

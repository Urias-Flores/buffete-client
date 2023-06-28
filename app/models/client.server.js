export async function getClients(){
  const response = await fetch(`${process.env.API_URL}/client`);
  return await response.json()
}

export async function  addClient(client){
  const response = await fetch(`${process.env.API_URL}/client`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(client)
  })
  return await response.json()
}

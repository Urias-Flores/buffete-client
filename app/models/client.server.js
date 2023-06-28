export async function getClients(){
  const response = await fetch(`${process.env.API_URL}/client`);
  return await response.json()
}

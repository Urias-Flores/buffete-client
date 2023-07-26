export async function getSubjects(){
  const response = await fetch(`${process.env.API_URL}/subject`)
  return await response.json()
}

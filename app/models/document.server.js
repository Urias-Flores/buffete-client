

export async function addDocument( documentFormData ){
  const response = await fetch(`${process.env.API_URL}/document`, {
    method: 'POST',
    body: documentFormData
  })
  return await response.json()
}

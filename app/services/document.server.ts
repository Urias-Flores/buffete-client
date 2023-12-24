export async function addDocument( documentFormData: any ){
  const response = await fetch(`${process.env.API_URL}/documents`, {
    method: 'POST',
    body: documentFormData
  })
  return await response.json()
}

export async function deleteDocument(DocumentID: string){
  const response = await fetch(`${process.env.API_URL}/documents/${DocumentID}`, {
    method: 'DELETE',
  })
  return await response.json();
}

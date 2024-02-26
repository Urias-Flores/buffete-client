export async function addDocument( documentFormData: any ){
  const response = await fetch(`https://grupo-sosamorales.com/api/documents`, {
    method: 'POST',
    body: documentFormData
  })
  return await response.json()
}

export async function deleteDocument(DocumentID: string){
  const response = await fetch(`https://grupo-sosamorales.com/api/documents/${DocumentID}`, {
    method: 'DELETE',
  })
  return await response.json();
}

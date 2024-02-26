export async function getInternalDocuments(){
  const result = await fetch(`https://grupo-sosamorales.com:8000/api/internal-documents`);
  return await result.json();
}

export async function getInternalDocumentByID(InternalDocumentID: string){
  const result = await fetch(`https://grupo-sosamorales.com:8000/api/internal-documents/${InternalDocumentID}`)
  return await result.json();
}

export async function addInternalDocument(internalDocumentFormData: any){
  const result = await fetch(`https://grupo-sosamorales.com:8000/api/internal-documents`, {
    method: 'POST',
    body: internalDocumentFormData
  })
  return await result.json();
}

export async function deleteInternalDocument(InternalDocumentID: any){
  const result = await fetch(`https://grupo-sosamorales.com:8000/api/internal-documents/${InternalDocumentID}`, {
    method: 'DELETE'
  });
  return await result.json();
}


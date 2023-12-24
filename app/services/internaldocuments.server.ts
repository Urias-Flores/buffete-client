export async function getInternalDocuments(){
  const result = await fetch(`${process.env.API_URL}/internal-documents`);
  return await result.json();
}

export async function getInternalDocumentByID(InternalDocumentID: string){
  const result = await fetch(`${process.env.API_URL}/internal-documents/${InternalDocumentID}`)
  return await result.json();
}

export async function addInternalDocument(internalDocumentFormData: any){
  const result = await fetch(`${process.env.API_URL}/internal-documents`, {
    method: 'POST',
    body: internalDocumentFormData
  })
  return await result.json();
}

export async function deleteInternalDocument(InternalDocumentID: any){
  const result = await fetch(`${process.env.API_URL}/internal-documents/${InternalDocumentID}`, {
    method: 'DELETE'
  });
  return await result.json();
}


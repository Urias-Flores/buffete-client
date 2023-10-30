export async function getInternalDocuments(){
  const result = await fetch(`${process.env.API_URL}/internaldocument`);
  return await result.json();
}

export async function getInternalDocumentByID(InternalDocumentID){
  const result = await fetch(`${process.env.API_URL}/internaldocument/${InternalDocumentID}`)
  return await result.json();
}

export async function addInternalDocument(internalDocumentFormData){
  const result = await fetch(`${process.env.API_URL}/internaldocument`, {
    method: 'POST',
    body: internalDocumentFormData
  })
  return await result.json();
}

export async function deleteInternalDocument(InternalDocumentID){
  const result = await fetch(`${process.env.API_URL}/internaldocument/${InternalDocumentID}`, {
    method: 'DELETE'
  });
  return await result.json();
}


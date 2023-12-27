export async function getSubjects(){
  const response = await fetch(`https://localhost:8000/api/subjects`)
  return await response.json()
}

export async function getSubjectByID(SubjectID: string){
  const response = await fetch(`https://localhost:8000/api/subjects/${SubjectID}`)
  return await response.json();
}

export async function addSubject( subject: any ){
  const response = await fetch(`https://localhost:8000/api/subjects`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(subject)
  })
  return await response.json();
}

export async function updateSubject( subject: any ){
  const response = await fetch(`https://localhost:8000/api/subjects`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(subject)
  })
  return await response.json();
}

export async function deleteSubject( SubjectID: string ) {
  const response = await fetch(`https://localhost:8000/api/subjects/${SubjectID}`, {
    method: 'DELETE'
  });
  return await response.json();
}

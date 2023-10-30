export async function getSubjects(){
  const response = await fetch(`${process.env.API_URL}/subject`)
  return await response.json()
}

export async function getSubjectByName(name){
  const response = await fetch(`${process.env.API_URL}/subject/name/${name}`)
  return await response.json()
}

export async function addSubject( subject ){
  const response = await fetch(`${process.env.API_URL}/subject`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(subject)
  })
  return await response.json();
}

export async function updateSubject( SubjectID, subject ){
  const response = await fetch(`${process.env.API_URL}/subject/${SubjectID}`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(subject)
  })
  return await response.json();
}

export async function getSubjects(){
  const response = await fetch(`${process.env.API_URL}/subjects`)
  return await response.json()
}

export async function addSubject( subject ){
  const response = await fetch(`${process.env.API_URL}/subjects`, {
    method: 'POST',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(subject)
  })
  return await response.json();
}

export async function updateSubject( subject ){
  const response = await fetch(`${process.env.API_URL}/subjects/${SubjectID}`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(subject)
  })
  return await response.json();
}

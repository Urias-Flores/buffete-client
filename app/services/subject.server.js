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
  const response = await fetch(`${process.env.API_URL}/subjects`, {
    method: 'PUT',
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(subject)
  })
  return await response.json();
}

export async function deleteSubject( SubjectID ) {
  const response = await fetch(`${process.env.API_URL}/subjects/${SubjectID}`, {
    method: 'DELETE'
  });
  return await response.json();
}

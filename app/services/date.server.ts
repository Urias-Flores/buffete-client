export async function getAllDates(){
  const response = await fetch(`https://administracion.grupo-sosamorales.com:7000/api/dates`)
  return await response.json();
}

export async function addDate( date: any ){
  const response = await fetch(`https://administracion.grupo-sosamorales.com:7000/api/dates`, {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(date)
  });
  return await response.json();
}

export async function updateDate( date: any ){
  const response = await fetch(`https://administracion.grupo-sosamorales.com:7000/api/dates`, {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(date)
  });
  return await response.json();
}

export async function deleteDate( DateID: any ){
  const response = await fetch(`https://administracion.grupo-sosamorales.com:7000/api/dates/${DateID}`, {
    method: "DELETE"
  });
  return await response.json();
}

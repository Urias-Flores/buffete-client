export async function login( username: string, password: string ){
  const body = {
    Email_Name: username.toLowerCase(),
    Password: password
  }

  const response = await fetch(`http://administracion.grupo-sosamorales.com:8000/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  return await response.json();
}

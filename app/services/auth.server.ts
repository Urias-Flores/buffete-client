export async function login( username: string, password: string ){
  const body = {
    Email_Name: username.toLowerCase(),
    Password: password
  }

  const response = await fetch(`https://grupo-sosamorales.com/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  return await response.json();
}

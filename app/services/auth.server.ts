export async function login( username: string, password: string ){
  const body = {
    Email_Name: username,
    Password: password
  }

  const response = await fetch(`${process.env.API_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  return await response.json();
}

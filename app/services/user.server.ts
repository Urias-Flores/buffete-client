export async function getUsers(){
  const response = await fetch(`https://ufsofts.com:8000/api/users`);
  return await response.json();
}

export async function getUsersByID( UserID: string ){
  const response = await fetch(`https://ufsofts.com:8000/api/users/${UserID}`);
  return await response.json();
}

export async function createPreviousUser(code: string, accessLevel: string){
  const user = {
    Name: '',
    Email: '',
    Phone: '',
    Password: code,
    Token: code,
    AccessLevel: accessLevel,
    State: 0
  }
  const response = await fetch(`https://ufsofts.com:8000/api/users`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await response.json();
}

export async function updateUser(user: any){
  const response = await fetch(`https://ufsofts.com:8000/api/users`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await response.json();
}

export async function deleteUser(userID: string){
  const response = await fetch(`https://ufsofts.com:8000/api/users/${userID}`, {
    method: "DELETE"
  });
  return await response.json();
}

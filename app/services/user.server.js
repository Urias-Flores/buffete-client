import {fetch} from "@remix-run/node";

export async function getUsers(){
  const response = await fetch(`${process.env.API_URL}/user`);
  return await response.json();
}

export async function getUsersByID( UserID ){
  const response = await fetch(`${process.env.API_URL}/user/${UserID}`);
  return await response.json();
}

export async function createPreviousUser(code, accessLevel){
  const user = {
    Name: '',
    Email: '',
    Phone: '',
    Password: code,
    Token: code,
    AccessLevel: accessLevel,
    State: 0
  }
  const response = await fetch(`${process.env.API_URL}/user`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await response.json();
}

export async function updateUser(user){
  const response = await fetch(`${process.env.API_URL}/user/${user.UserID}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await response.json();
}

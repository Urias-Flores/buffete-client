export function formattedDate(timestamp: any){
  const dateObj = new Date(timestamp);

  const options: any = {
    year: "numeric",
    month: "long", 
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return dateObj.toLocaleString("es-ES", options);
}

export const accessLevel = [
  {
    AccessLevelID: 'N',
    Name: 'Dependiente'
  },
  {
    AccessLevelID: 'A',
    Name: 'Administrador'
  },
  {
    AccessLevelID: 'R',
    Name: 'Raíz'
  }
]

export function generateRandomCode(length: number) {
  const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';

  for (let i = 0; i < length; i++) {
    const randomCharacter = character[Math.floor(Math.random() * character.length)];
    code += randomCharacter;
  }
  return code;
}

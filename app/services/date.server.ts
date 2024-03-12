export async function getAllDates() {
  const response = await fetch(`${process.env.API_URL}/dates`);
  return await response.json();
}

export async function addDate(date: any) {
  const response = await fetch(`${process.env.API_URL}/dates`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(date),
  });
  return await response.json();
}

export async function updateDate(date: any) {
  const response = await fetch(`${process.env.API_URL}/dates`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(date),
  });
  return await response.json();
}

export async function deleteDate(DateID: any) {
  const response = await fetch(`${process.env.API_URL}/dates/${DateID}`, {
    method: "DELETE",
  });
  return await response.json();
}

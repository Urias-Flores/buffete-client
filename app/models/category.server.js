export async function getCategories(){
  const response = await fetch(`${process.env.API_URL}/category`)
  return await response.json()
}

export function formattedDate(timestamp){
  const dateObj = new Date(timestamp);

  const options = {
    year: "numeric",
    month: "long", // "long" para el nombre del mes completo en español, "short" para la versión corta
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Puedes usar "long" para mostrar el nombre del huso horario completo
  };

  return dateObj.toLocaleString("es-ES", options);
}

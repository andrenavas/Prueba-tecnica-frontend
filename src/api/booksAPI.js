import axios from "axios";

const bookApi = axios.create({
  baseURL: 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev'
})

export const getBooks = async () => {
  try {
    const response = await bookApi.get();
    console.log("Respuesta de la API en getBooks:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    throw error;
  }
}
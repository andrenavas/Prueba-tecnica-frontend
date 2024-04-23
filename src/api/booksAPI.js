import axios from "axios";

const bookApi = axios.create({
    baseURL: 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev'
})

export const getBooks = async () => {
   const response = await bookApi.get();
return response.data;
}
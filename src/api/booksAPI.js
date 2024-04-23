import axios from "axios";

const bookApi = axios.create({
    baseURL: 'https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev'
})

export const getBooks = async () => {
   const response = await bookApi.get();
return response.data;
}

// export const addBookList = (book) => {
//     bookApi.post(book);
    
// }

export const addBookList = async (book) => {
    try {
        const response = await bookApi.post('/bookList', book);
        return response.data;
    } catch (error) {
        throw new Error('Error adding book to list: ' + error.message);
    }
}
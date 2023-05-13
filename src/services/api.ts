import axios from 'axios';

const api = axios.create({
    baseURL : 'https://json-serve-ktqo.onrender.com',
});

export default api;
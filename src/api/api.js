import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const BASE_CONNECTION = axios.create({
    baseURL: BASE_URL,
});

const api = {
    getPosts: () => BASE_CONNECTION.get('/posts'),
    getPostById: id => BASE_CONNECTION.get(`/posts/${id}`),
};

export default api;

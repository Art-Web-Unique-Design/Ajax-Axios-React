import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return PromiseRejectionEvent.reject(error);
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM THE INSTANCE';

export default instance;
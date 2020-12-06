import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-3163b.firebaseio.com/'
});

export default instance;

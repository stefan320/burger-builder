import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-68b2d-default-rtdb.firebaseio.com/'
});

export default instance;
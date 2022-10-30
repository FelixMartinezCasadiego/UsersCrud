import axios from 'axios';

const url = "http://localhost:5000/users/";

export const retriveUsers = () => axios.get(url).then(({data}) => data);
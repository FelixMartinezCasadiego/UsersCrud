import axios from 'axios';

const url = "http://localhost:5000/users/";

export const retriveUsers = () => axios.get(url).then(({data}) => data);

export const sendNewUser = ( firstName : string, lastName : string, age: number ) => axios.post(
    url, {
        firstName,
        lastName,
        age
    }
    ).then(({data}) => data);
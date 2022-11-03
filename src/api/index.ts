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

export const deleteUser = (id : number) => axios.delete(`http://localhost:5000/users/${id}`).then(({data}) => data);

export const editUsers = (id : number, firstName : string, lastName : string, age: number) => axios.patch(
    `http://localhost:5000/users/${id}`, 
    {
        firstName,
        lastName,
        age   
    }
    ).then(({data}) => data);

export const userDetails = (id : number) => axios.get(`http://localhost:5000/users/${id}`).then(({data}) => data)


// Config para parámetros de autorización.
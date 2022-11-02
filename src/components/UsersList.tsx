import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Users } from '../api/typeApi';
import {deleteUser} from '../api/index';
import { useState } from 'react';

interface Props { 
    user: Users,
    setIsloading: (e : boolean) => void
}

const UsersList = ({user , setIsloading} : Props) => {

    const deleteUsers = () => {
        deleteUser(user.id)
        setIsloading(true)
    }

    return (
        <>
            <tr>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.firstName}
                </td>
                <td>
                    {user.lastName}
                </td>
                <td>
                    {user.age}
                </td>
                <td>
                    <Button variant='primary' className='mx-2'>Edit</Button>
                    <Button onClick={deleteUsers} variant='danger'>Delete</Button>
                </td>
            </tr>
        </>
  )
}

export default UsersList;
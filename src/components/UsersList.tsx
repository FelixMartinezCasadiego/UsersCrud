import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { Users } from '../api/typeApi';
import {deleteUser} from '../api/index';
import EditUserModal from './EditUser';
import { useState } from 'react';
import {Link} from 'react-router-dom'

interface Props { 
    user: Users,
    setIsloading: (e : boolean) => void
}

const UsersList = ({user , setIsloading} : Props) => {

    const [ShowEditModal, setShowEditModal] = useState(false);

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
                    <Link 
                        to={`/users/${user.id}`}
                        className='mx-2 primary'
                    > Edit
                    </Link>
                    <Button onClick={deleteUsers} variant='danger'>Delete</Button>
                </td>
            </tr>
        </>
  )
}

export default UsersList;
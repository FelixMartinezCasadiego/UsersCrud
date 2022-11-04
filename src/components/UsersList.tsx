import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalFooter, ModalHeader } from 'react-bootstrap';
import { Users } from '../api/typeApi';
import {deleteUser} from '../api/index';
import {Link} from 'react-router-dom';
import { useState } from 'react';

interface Props { 
    user: Users,
    setIsloading: (e : boolean) => void
}

const UsersList = ({user , setIsloading} : Props) => {

    const [modalMessageDeleted, setModalMessageDeleted] = useState(false);

    const deleteUsers = () => {
        deleteUser(user.id)
        setModalMessageDeleted(true)
    }

    const toggleModalMessage = () => {
        !setModalMessageDeleted
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

            <Modal show={modalMessageDeleted}>
                <ModalHeader>
                    <h3>User correctly deleted</h3>
                </ModalHeader>
                <ModalFooter>
                    <Button className='primary' onClick={toggleModalMessage} >Accept</Button>
                </ModalFooter>
            </Modal>
        </>
  )
}

export default UsersList;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, ModalHeader } from 'react-bootstrap';
import { Users } from '../api/typeApi';

interface Props { user: Users}

const UsersList = ({user} : Props) => {

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
                    <Button variant='danger'>Delete</Button>
                </td>
            </tr>
        </>
  )
}

export default UsersList;
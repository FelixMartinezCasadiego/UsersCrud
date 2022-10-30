import { useState, useEffect, useContext } from 'react';
import { retriveUsers } from '../api';
import { Users } from '../api/typeApi';
import { Button, Table, Container, Modal } from 'react-bootstrap';
import UsersList from './UsersList';
import AddUserModal from './AddUserModal';
import { Context } from '../context/UserContext';

const UsersContainer = () => {

    const [users, setUsers] = useState<Users[] | undefined>([]);
    
    const { modalShow , openModal } : any = useContext(Context);

    useEffect(() => {
        retriveUsers()
            .then((resp) => setUsers(resp) )
            .catch((err) => {throw new Error(err)})
    }, [])

    return (
        <>
            <Container>
                <Button variant="primary" className='my-2' onClick={openModal}>Add a new User</Button>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users ? users.map((user) => <UsersList user={user} key={user.id} /> )  : ""}
                    </tbody>
                </Table>
            </Container>
            
            <Modal show={modalShow}>
                <AddUserModal />
            </Modal>
            
        </>
    )
}

export default UsersContainer;
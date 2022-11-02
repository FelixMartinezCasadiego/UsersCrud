import { useState, useEffect, useContext } from 'react';
import { retriveUsers } from '../api';
import { Users } from '../api/typeApi';
import { Button, Table, Container, Modal } from 'react-bootstrap';
import UsersList from './UsersList';
import AddUserModal from './AddUserModal';
import { Context } from '../context/UserContext';

const UsersContainer = () => {

    const [users, setUsers] = useState<Users[] | undefined>([]);

    const [isLoading, setIsLoading] = useState(true);
    
    const { modalShow , openModal } : any = useContext(Context);

    useEffect(() => {
        
        if(isLoading === true){
            retriveUsers()
                .then((resp) => {
                    setUsers(resp) 
                    setIsLoading(false)
                })
                .catch((err) => {throw new Error(err)})
            }

    }, [isLoading])

    return (
        <>
            <Container>
                <Button variant="primary" className='my-2' onClick={openModal}>Add a new User</Button>
                {!isLoading && users ?
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
                            {users.map((user) => <UsersList user={user} key={user.id} setIsloading={setIsLoading}/> )}
                            {/* isLoading existe porque al realizar el pintado se encontraba en false, al volver a realizar la validadción se carga en true y debe a volver a pasarse a false */}
                        </tbody>
                    </Table>
                : " " }
            </Container>
            
            <Modal show={modalShow}>
                <AddUserModal setIsloading={setIsLoading} />
            </Modal>
            
        </>
    )
}

export default UsersContainer;
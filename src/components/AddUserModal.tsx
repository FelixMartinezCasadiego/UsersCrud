import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import { ModalBody, ModalFooter, FormGroup, ModalHeader, Button } from 'react-bootstrap';
import { Context } from '../context/UserContext';

function AddUserModal() {

    const {openModal} : any = useContext(Context);

    const [formModal, setFormModal] = useState({
        firstName: "" ,
        lastName: "",
        age: 0,
    });

    const onInputChange = (e : any) => {
        //Se debe abrir el setFormModal en un objeto, realizar spread operator para ir almacenando la información, luego abrir corchetes e indicar e.target.name donde name es el valor que fue definido en el estado y luego indicar que se desea realizar que en este caso es e.target.value
        setFormModal({
            ...formModal, 
            [e.target.name] : e.target.value
        })
    };

    const onSubmit = (e : any) => {
        e.preventDefault();
    }
    
    return (
        <>
        
            <ModalHeader>
                <div>
                    <h3>Register User</h3>
                </div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label>First name: </label>
                    <input 
                        type="text" 
                        className='form-control' 
                        autoComplete='off'
                        name='firstName' 
                        onChange={onInputChange} 
                        onSubmit={onSubmit}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Last name: </label>
                    <input 
                        type="text" 
                        className='form-control' 
                        autoComplete='off'
                        name='lastName' 
                        onChange={onInputChange} 
                        onSubmit={onSubmit}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Age: </label>
                    <input 
                        type="number" 
                        className='form-control' 
                        autoComplete='off'
                        name='age' 
                        onChange={onInputChange} 
                        onSubmit={onSubmit}
                    />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button variant='primary' onClick={onSubmit}>Add</Button>
                <Button variant='danger' onClick={openModal} >Cancel</Button>
            </ModalFooter>

        </>
    )
}

export default AddUserModal
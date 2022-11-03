import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { FormGroup, Button } from 'react-bootstrap';
import { editUsers, userDetails } from '../api';
import {useParams, Link} from 'react-router-dom';
import { Users } from '../api/typeApi';

const EditUser = () => {

    let params = useParams();

    let userId : string = params && params.id ? params.id : '';

    const [userDetail, setUserDetail] = useState<Users>()

    useEffect(() => {
      userDetails(userId)
        .then((resp) => setUserDetail(resp))
        .catch((err) => {throw new Error(err)})
    }, [userId])
    

    const onInputChange = (e : any) => {
        if(userDetail){
            setUserDetail({
                ...userDetail, 
                [e.target.name] : e.target.value
            })
        }
    };

    const onSubmit = (e : any) => {
        e.preventDefault();
    }

    const submitEditUser = () => {
        if(userDetail){
            editUsers(userDetail.id ,userDetail.firstName, userDetail.lastName, userDetail.age)}
        else {console.log('Crear mensaje de error')
        };
    }

    return (
        <>
            {userDetail ? 

                <>
                    <div>
                        <h3> User {userDetail.firstName} </h3>
                    </div>

                    <div>
                        <FormGroup>
                            <label>First name: </label>
                            <input 
                                type="text" 
                                className='form-control' 
                                autoComplete='off'
                                value={userDetail.firstName}
                                name='firstName' 
                                onChange={onInputChange} 
                                onSubmit={onSubmit}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Last name: </label>
                            <input 
                                type="text" 
                                className='form-control' 
                                autoComplete='off'
                                value={userDetail.lastName}
                                name='lastName' 
                                onChange={onInputChange} 
                                onSubmit={onSubmit}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Age: </label>
                            <input 
                                type="number" 
                                className='form-control' 
                                autoComplete='off'
                                value={userDetail.age}
                                name='age' 
                                onChange={onInputChange} 
                                onSubmit={onSubmit}
                                required
                            />
                        </FormGroup>
                    </div>

                    <div>
                        <Button variant='primary' onClick={submitEditUser} >Add</Button>
                        <Link to={'/'} className='secondary' >Return</Link>
                    </div>
                </>
            : ''}
            
        </>
    )
}

export default EditUser
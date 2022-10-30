import React, { createContext, useState } from 'react';

interface props {
    children: JSX.Element | JSX.Element[] // un elemento jsx hijo | varios elementos jsx hijos
}

export const Context = createContext({});

function UserProvider({children} : props) {

    const [modalShow, setModalShow] = useState(false);

    const openModal = () => {
        if(modalShow === false){
            setModalShow(true)
        } else {
            setModalShow(false)
        }
        
    };

    return (
        <Context.Provider 
            value={{
                modalShow,
                setModalShow,
                openModal,
        }} 
        >
            {children}
        </Context.Provider>
    )
}

export default UserProvider
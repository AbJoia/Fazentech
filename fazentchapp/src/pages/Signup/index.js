import React from 'react';
import {Text} from 'react-native';

import Header from '../../Components/Header';
import Form from '../../Components/Form';

const Signup = () =>{
    return(
        <>
            <Header titulo="Cadastro de usuário"/>
            <Form/>
        </>
    );
}

export default Signup;
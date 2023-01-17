import React, { useState } from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';
import { doLogin } from '../services/authservice';
import { mensagemSucesso, mensagemErro } from '../components/toastr';
import {  Link,useNavigate  } from "react-router-dom";

const FormLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const logar = () => {
        
        doLogin(email,password)
        .then(response => {
            localStorage.setItem('token', response.token);
            mensagemSucesso('Login realizado com sucesso!');
            setEmail('');
            setPassword('')
            navigate('/lista-carteiras');
        })
        .catch(err => {
            console.log(err.message);
            setEmail('');
            setPassword('')
            mensagemErro(err.message)
        })

        
    };

    const getTo = (toName) => {
        return window.location.pathname === toName ? true : false
    }

    return (
        <React.Fragment>
            
            <div className='container py-5 h-100'>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <Card className='text-center' title='Login'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='bs-component'>
                                    
                                        <FormGroup label='Email: *' htmlFor='inputEmail'>
                                            <input
                                                type='email'
                                                id='inputEmail'
                                                value={email}
                                                className='form-control'
                                                name='email'
                                                autoComplete="off"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </FormGroup>
                                        <FormGroup label='Senha: *' htmlFor='inputpassword'>
                                            <input
                                                type='password'
                                                id='inputpassword'
                                                value={password}
                                                className='form-control'
                                                name='password'
                                                autoComplete="nope"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </FormGroup>
                                        <Stack spacing={1} direction='row' style={{ marginTop: '20px' }}>
                                            <button
                                                onClick={logar}
                                                type='button'
                                                className='btn btn-primary'
                                            >
                                                Login
                                            </button>
                                            <Link className='btn btn-success' to={getTo('/cadastro-usuarios') ?  '#': '/cadastro-usuarios'  }>Cadastrar</Link>
                                        </Stack>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );


}

export default FormLogin;
import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';
import CadastroUsuario from './cadastro-usuario';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


class Login extends React.Component {
    state = {
        email: '',
        senha: '',
    };

    logar = () => {
        mensagemSucesso('Login realizado com sucesso!');
    };

    telaCadastro = () => {
        return (
            <div>
                <CadastroUsuario />
            </div>
        );
    };

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {

        return (
            <div className='container'>
                <Card title='Login'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <FormGroup label='Email: *' htmlFor='inputEmail'>
                                    <input
                                        type='email'
                                        id='inputEmail'
                                        value={this.state.email}
                                        className='form-control'
                                        name='email'
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label='Senha: *' htmlFor='inputSenha'>
                                    <input
                                        type='password'
                                        id='inputSenha'
                                        value={this.state.Senha}
                                        className='form-control'
                                        name='senha'
                                        onChange={(e) => this.setState({ senha: e.target.value })}
                                    />
                                </FormGroup>
                                <Stack spacing={1} direction='row' style={{ marginTop: '20px' }}>
                                    <Button
                                        onClick={this.logar}
                                        type='button'
                                        className='btn btn-success'
                                    >
                                        Login
                                    </Button>
                                    <button
                                        onClick={this.telaCadastro}
                                        type='button'
                                        className='btn btn-success'
                                    >
                                        Cadastrar
                                    </button>
                                </Stack>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    };

}

export default Login;
import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';
import CadastroUsuario from './cadastro-usuario';


class Login extends React.Component {
    state = {
        email: '',
        senha: '',
    };

    cadastrar = () => {
        mensagemSucesso('Login realizado com sucesso!');
    };

    telaCadastro = () => {
        return (
            <div>
                <CadastroUsuario />
            </div>
        );
    };

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
                                <Stack spacing={1} padding={1} direction='row'>
                                    <button
                                        onClick={this.cadastrar}
                                        type='button'
                                        className='btn btn-success'
                                    >
                                        Login
                                    </button>
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
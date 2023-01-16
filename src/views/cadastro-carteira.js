import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';
import { Link } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer'; 


class CadastroCarteira extends React.Component {

    state = {
        nome: '',
        dataDaCriacao: ''
    };

    cadastrar = () => {
        if (this.state.senha === this.state.senhaRepeticao) {
            mensagemSucesso(`Carteira ${this.state.nome} cadastrada com sucesso!`);
        }
    };

    cancelar = () => {
        this.setState({
            nome: '',
            dataDaCriacao: ''
        });
    };

    getTo = (toName) => {
        return window.location.pathname === toName ? true : false
    }

    render() {
        return (
            <div className='container'>
                <Navbar deslogar={true} />
                <Card title='Cadastro de Carteira'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <FormGroup label='Nome: *' htmlFor='inputNome'>
                                    <input
                                        type='text'
                                        id='inputNome'
                                        value={this.state.nome}
                                        className='form-control'
                                        name='nome'
                                        onChange={(e) => this.setState({ nome: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label='Data da criação: *' htmlFor='inputDataDaCriacao'>
                                    <input
                                        type='date'
                                        id='inputinputDataDaCriacaoSenha'
                                        value={this.state.dataDaCriacao}
                                        className='form-control'
                                        name='dataDaCriacao'
                                        onChange={(e) => this.setState({ dataDaCriacao: e.target.value })}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <Stack spacing={1} direction='row' style={{ marginTop: '20px' }}>
                        <Link className='btn btn-success' to={this.getTo('/lista-carteiras') ? '#' : '/lista-carteiras'} onClick={this.cadastrar}>Salvar</Link>
                        <Link className='btn btn-danger' to={this.getTo('/lista-carteiras') ? '#' : '/lista-carteiras'}>Cancelar</Link>
                    </Stack>
                </Card>
                <Footer />
            </div>
        );
    };

}

export default CadastroCarteira;
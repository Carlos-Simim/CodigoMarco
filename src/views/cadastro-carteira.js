import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';


class CadastroCarteira extends React.Component {

    state = {
        nome: '',
        dataDaCriacao: ''
    };

    cadastrar = () => {
        if (this.state.senha == this.state.senhaRepeticao) {
            mensagemSucesso(`Carteira ${this.state.nome} cadastrada com sucesso!`);
        }
    };

    cancelar = () => {
        this.setState({
            nome: '',
            dataDaCriacao: ''
        });
    };

    render() {
        return (
            <div className='container'>
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
                        <button
                            onClick={this.cadastrar}
                            type='button'
                            className='btn btn-success'
                        >
                            Salvar
                        </button>
                        <button
                            onClick={this.cancelar}
                            type='button'
                            className='btn btn-danger'
                        >
                            Cancelar
                        </button>
                    </Stack>
                </Card>
            </div>
        );
    };

}

export default CadastroCarteira;
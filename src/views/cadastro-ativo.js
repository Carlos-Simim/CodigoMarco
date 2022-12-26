import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';


class CadastroAtivo extends React.Component {

    state = {
        nome: '',
        abreviatura: '',
        setor: '',
        precoUnit: '',
        quantidade: '',
        carencia: '',
        impostos: '',
        dataAquisicao: ''
    };

    cadastrar = () => {
        if (this.state.senha === this.state.senhaRepeticao) {
            mensagemSucesso(`Ativo ${this.state.nome} cadastrado com sucesso!`);
        }
    };

    cancelar = () => {
        this.setState({
            nome: '',
            abreviatura: '',
            setor: '',
            precoUnit: '',
            quantidade: '',
            carencia: '',
            impostos: '',
            dataAquisicao: ''
        });
    };

    render() {
        return (
            <div className='container'>
                <Card title='Cadastro de Ativos'>
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
                                <FormGroup label='Abreviatura: ' htmlFor='inputAbreviatura'>
                                    <input
                                        type='text'
                                        id='inputAbreviatura'
                                        value={this.state.abreviatura}
                                        className='form-control'
                                        name='abreviatura'
                                        onChange={(e) => this.setState({ abreviatura: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label='Setor: *' htmlFor='inputSetor'>
                                    <input
                                        type='text'
                                        id='inputSetor'
                                        value={this.state.setor}
                                        className='form-control'
                                        name='setor'
                                        onChange={(e) => this.setState({ setor: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label='Preço Unitário: *' htmlFor='inputPrecoUnitario'>
                                    <input
                                        type='number'
                                        id='inputPrecoUnitario'
                                        value={this.state.precoUnit}
                                        className='form-control'
                                        name='precoUnitario'
                                        onChange={(e) => this.setState({ precoUnit: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label='Quantidade: *' htmlFor='inputQuantidade'>
                                    <input
                                        type='number'
                                        id='inputQuantidade'
                                        value={this.state.quantidade}
                                        className='form-control'
                                        name='quantidade'
                                        onChange={(e) => this.setState({ quantidade: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label='Data Final da Carência:' htmlFor='inputCarencia'>
                                    <input
                                        type='date'
                                        id='inputCarencia'
                                        value={this.state.carencia}
                                        className='form-control'
                                        name='carencia'
                                        onChange={(e) => this.setState({ carencia: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup label='Data de Aquisição: ' htmlFor='inputDataAquisicao'>
                                    <input
                                        type='date'
                                        id='inputDataAquisicao'
                                        value={this.state.dataAquisicao}
                                        className='form-control'
                                        name='dataAquisicao'
                                        onChange={(e) => this.setState({ dataAquisicao: e.target.value })}
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

export default CadastroAtivo;
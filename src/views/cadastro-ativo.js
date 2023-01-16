import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';
import { useState } from "react";
import { mensagemErro, mensagemSucesso } from '../components/toastr';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';


const CadastroAtivo = () => {

    const navigate = useNavigate();

    const cadastrar = () => {
        if (this.state.senha === this.state.senhaRepeticao) {
        console.log("oi")
        mensagemSucesso(`Ativo cadastrado com sucesso!`);
        navigate(-1);
        }
        else{
            mensagemErro(`As senhas não conferem!`);
        }
    };

    const [nome, setNome] = useState('');
    const [abreviatura, setAbreviatura] = useState('');
    const [setor, setSetor] = useState('');

    const [precoUnit, setPrecoUnit] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [carencia, setCarencia] = useState('');
    //const [impostos, setImpostos] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');

    return (
        <div className='container'>
            <Navbar deslogar={true}/>
            <Card title='Cadastro de Ativos'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='bs-component'>
                            <FormGroup label='Nome: *' htmlFor='inputNome'>
                                <input
                                    type='text'
                                    id='inputNome'
                                    value={nome}
                                    className='form-control'
                                    name='nome'
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup label='Abreviatura: ' htmlFor='inputAbreviatura'>
                                <input
                                    type='text'
                                    id='inputAbreviatura'
                                    value={abreviatura}
                                    className='form-control'
                                    name='abreviatura'
                                    onChange={(e) => setAbreviatura(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup label='Setor: *' htmlFor='inputSetor'>
                                <input
                                    type='text'
                                    id='inputSetor'
                                    value={setor}
                                    className='form-control'
                                    name='setor'
                                    onChange={(e) => setSetor(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup label='Preço Unitário: *' htmlFor='inputPrecoUnitario'>
                                <input
                                    type='number'
                                    id='inputPrecoUnitario'
                                    value={precoUnit}
                                    className='form-control'
                                    name='precoUnitario'
                                    onChange={(e) => setPrecoUnit(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup label='Quantidade: *' htmlFor='inputQuantidade'>
                                <input
                                    type='number'
                                    id='inputQuantidade'
                                    value={quantidade}
                                    className='form-control'
                                    name='quantidade'
                                    onChange={(e) => setQuantidade(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup label='Data Final da Carência:' htmlFor='inputCarencia'>
                                <input
                                    type='date'
                                    id='inputCarencia'
                                    value={carencia}
                                    className='form-control'
                                    name='carencia'
                                    onChange={(e) => setCarencia(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup label='Data de Aquisição: ' htmlFor='inputDataAquisicao'>
                                <input
                                    type='date'
                                    id='inputDataAquisicao'
                                    value={dataAquisicao}
                                    className='form-control'
                                    name='dataAquisicao'
                                    onChange={(e) => setDataAquisicao(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <Stack spacing={1} direction='row' style={{ marginTop: '20px' }}>
                    <button
                        onClick={cadastrar}
                        type='button'
                        className='btn btn-success'
                    >
                        Salvar
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        type='button'
                        className='btn btn-danger'
                    >
                        Cancelar
                    </button>
                </Stack>
            </Card>
            <Footer />
        </div>
    );

}

export default CadastroAtivo;
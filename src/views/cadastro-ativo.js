import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';
import { useState, useEffect } from "react";
import { mensagemSucesso } from '../components/toastr';
import { useNavigate,useSearchParams } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { BASE_URL } from "../utils/requests";
import axios from 'axios';

const CadastroAtivo = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {

        if (searchParams.get("ativo_id") != null) {

            axios.get(`${BASE_URL}/ativos/${searchParams.get("ativo_id")}`)
                .then(response => {
                    setNome(response.data.nome);
                    setSetor(response.data.setor);
                    setPrecoUnit(response.data.precounitario);
                    setQuantidade(response.data.quantidade);

                    setCarencia(`${response.data.carencia.split("/")[2]}-${response.data.carencia.split("/")[1]}-${response.data.carencia.split("/")[0]}`);
                    setDataAquisicao(`${response.data.dataaquisicao.split("/")[2]}-${response.data.dataaquisicao.split("/")[1]}-${response.data.dataaquisicao.split("/")[0]}`);
                })
        }

    }, []);

    const cadastrar = () => {

        if (searchParams.get("ativo_id") == null) {
            mensagemSucesso(`Ativo ${nome} cadastrado com sucesso!`);
            
        } else {
            mensagemSucesso(`Ativo ${nome} editado com sucesso!`);
            
        }
        navigate(-1);
    };

    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');

    const [precoUnit, setPrecoUnit] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [carencia, setCarencia] = useState('');
    const [dataAquisicao, setDataAquisicao] = useState('');

    return (
        <div className='container'>
            <Navbar deslogar={true} />
            <div className='container py-5 h-100'>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                        <Card title={searchParams.get("ativo_id") == null ? 'Cadastro de Ativo' : 'Editar Ativo'}>
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default CadastroAtivo;
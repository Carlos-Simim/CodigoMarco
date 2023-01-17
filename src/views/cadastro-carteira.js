import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';
import { useNavigate,useSearchParams } from "react-router-dom";
import { mensagemSucesso } from '../components/toastr';
import { useState, useEffect } from "react";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { BASE_URL } from "../utils/requests";
import axios from 'axios';


const CadastroCarteira = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [nome, setNome] = useState('');
    const [datacriacao, setDataCriacao] = useState('');

    useEffect(() => {

        if (searchParams.get("carteira_id") != null) {

            axios.get(`${BASE_URL}/carteiras/${searchParams.get("carteira_id")}`)
                .then(response => {
                    const data = `${response.data.datacriacao.split("/")[2]}-${response.data.datacriacao.split("/")[1]}-${response.data.datacriacao.split("/")[0]}`
                    setNome(response.data.nome);
                    setDataCriacao(data);
                })
        }

    }, []);

    const cadastrar = () => {
        if (searchParams.get("carteira_id") == null) {
            mensagemSucesso(`Carteira ${nome} cadastrada com sucesso!`);
            navigate("/lista-carteiras");
        } else {
            mensagemSucesso(`Carteira ${nome} editada com sucesso!`);
            navigate("/lista-carteiras");
        }
    };

    const cancelar = () => {
        navigate("/lista-carteiras");
    };

    return (
        <div className='container'>
            <Navbar deslogar={true} />
            <div className='container py-5 h-100'>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                        <Card title={searchParams.get("carteira_id") == null ? 'Cadastro de Carteira' : 'Editar Carteira'} >
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
                                        <FormGroup label='Data da criação: *' htmlFor='inputDataDaCriacao'>
                                            <input
                                                type='date'
                                                id='inputinputDataDaCriacaoSenha'
                                                value={datacriacao}
                                                className='form-control'
                                                name='dataDaCriacao'
                                                onChange={(e) => setDataCriacao(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                            <Stack spacing={1} direction='row' style={{ marginTop: '20px' }}>
                                <button className='btn btn-success' onClick={cadastrar} >Salvar</button>
                                <button className='btn btn-danger' onClick={cancelar} >Cancelar</button>
                            </Stack>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );


}

export default CadastroCarteira;
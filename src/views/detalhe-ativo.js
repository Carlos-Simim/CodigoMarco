import React, { useState, useEffect } from 'react';

import Card from '../components/card';

import { BASE_URL, parseData } from "../utils/requests";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import SeriesChart from '../components/serieschart';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const DetalheAtivo = () => {

    const [searchParams] = useSearchParams();
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [dataaquisicao, setDataAquisicao] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BASE_URL}/ativoadquirido/${searchParams.get("ativo_id")}`)
            .then(response => {
                setNome(response.data.nome);
                setPreco(response.data.valor);
                setQuantidade(response.data.quantidade);
                setDataAquisicao(response.data.dataAquisicao)
            })
    }, []);

    const voltar = () => {
        navigate(-1);
    }

    return (
        <div className='container' style={{ marginBottom: 150 }}>
            <Navbar title={nome} deslogar={true} listarAtivos={true} />
            <Card title='Detalhes do Ativo'>
                <div className="row">

                    <div className="col-sm-6 mb-2">
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Indicador</th>
                                    <th> Valor </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >Preço médio </td>
                                    <td > {preco} </td>

                                </tr>

                                <tr>
                                    <td >Volatilidade </td>
                                    <td > 1.74 </td>

                                </tr>
                                <tr>
                                    <td >Retorno </td>
                                    <td > 7.5 % </td>

                                </tr>
                                <tr>
                                    <td > Data Aquisicao </td>
                                    <td > {parseData(dataaquisicao)} </td>

                                </tr>
                                <tr>
                                    <td >Quantidade </td>
                                    <td > {quantidade} </td>

                                </tr>
                                <tr>
                                    <td >Total </td>
                                    <td > R$ {quantidade * preco} </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-6 mb-2">
                        <SeriesChart />
                    </div>
                </div>
                <Stack spacing={1} direction='row' style={{ marginTop: '0' }}>
                    <button className='btn btn-success' onClick={voltar} >Voltar</button>
                </Stack>
            </Card>
            <Footer />
        </div>
    );
}

export default DetalheAtivo;
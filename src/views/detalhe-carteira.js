import React, { useState, useEffect } from 'react';

import Card from '../components/card';

import { BASE_URL } from "../utils/requests";
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import SeriesChart from '../components/serieschart';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const DetalheCarteira = () => {

    const [searchParams] = useSearchParams();
    const [carteira, setCarteira] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/carteira?carteira_id=${searchParams.get("carteira_id")}`)
            .then(response => {
                setCarteira(response.data);
            })
    }, []);

    const getTo = (toName) => {
        return window.location.pathname === toName ? true : false
    }

    return (
        <div className='container' style={{ marginBottom: 150 }}>
            <Navbar title="Analizador de carteira" deslogar={true} />
            <Card title='Detalhes Carteira'>
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
                                    <td >Beta </td>
                                    <td > 0.74 </td>

                                </tr>
                                <tr>
                                    <td >Volatilidade </td>
                                    <td > 1.74 </td>

                                </tr>
                                <tr>
                                    <td >Risco </td>
                                    <td > 3.54 </td>

                                </tr>
                                <tr>
                                    <td >Retorno </td>
                                    <td > 7.5 % </td>

                                </tr>
                                <tr>
                                    <td >P/L </td>
                                    <td > 0.98 </td>

                                </tr>
                                <tr>
                                    <td >Total </td>
                                    <td > R$ 15000.0 </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="col-sm-6 mb-2">
                        <SeriesChart />
                    </div>
                </div>
            </Card>
            <Card title='Ativos'>
                <div className='row'>
                    <div className='col-sm-12 mb-2'>
                        <div className='bs-component'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th> Preço médio </th>
                                        <th>rentabilidade</th>
                                        <th className="d-none d-sm-table-cell" >Data criação</th>
                                        <th className="d-none d-sm-table-cell" >Data modificação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        carteira?.map(x => (
                                            <tr key={x.id}>
                                                <td >{x.nome} </td>
                                                <td >{x.pm} </td>
                                                <td> {x.rentabilidade}</td>
                                                <td >{x.dataaquisicao} </td>
                                                <td >{x.datamodificacao} </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Link style={{ float: 'left' }} className='btn btn-success ms-2' to={getTo('/cadastro-ativo') ? '#' : '/cadastro-ativo'}>Cadastrar Ativo</Link>
                <Link style={{ float: 'left' }} className='btn btn-primary ms-2' to={getTo('/lista-carteiras') ? '#' : '/lista-carteiras'}>Carteiras</Link>
            </Card>

            <Footer />
        </div>
    );
}

export default DetalheCarteira;
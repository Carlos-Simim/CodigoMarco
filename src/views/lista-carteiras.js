import React from 'react';
import Card from '../components/card';
import { useState, useEffect } from "react";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
//import { getCarteiras } from '../services/carteiraservice';

import { BASE_URL } from "../utils/requests";
import axios from 'axios';

const ListaCarteiras = () => {

    const navigate = useNavigate();
    const [carteiras, setCarteiras] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/carteiras`)
            .then(response => {
                setCarteiras(response.data);
            })
    }, []);


    const onClickCarteira = (x) => {
        navigate(`/carteira?carteira_id=${x.id}`);
    }

    const getTo = (toName) => {
        return window.location.pathname === toName ? true : false
    }

    return (
        <div className='container'>
            <Navbar title="Gerenciador de investimentos" deslogar={true} />
            <Card title='Carteiras'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='bs-component'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th className="d-none d-sm-table-cell" >Data criação</th>
                                        <th className="d-none d-sm-table-cell" >Data modificação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carteiras?.map(x => (
                                            <tr key={x.id}>
                                                <td onClick={() => onClickCarteira(x)} style={{ cursor: "pointer" }} >{x.nome} </td>
                                                <td >{x.datacriacao} </td>
                                                <td >{x.datamodificacao} </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Link style={{ float: 'right' }} className='btn btn-success' to={getTo('/cadastro-carteira') ? '#' : '/cadastro-carteira'}>Cadastrar carteira</Link>
            </Card>
            <Footer />
        </div>
    );
}

export default ListaCarteiras;
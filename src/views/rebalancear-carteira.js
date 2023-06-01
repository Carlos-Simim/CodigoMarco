import React from 'react';
import FormLogin from '../components/login';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Card from '../components/card';
import FormGroup from '../components/form-group';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/requests";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { mensagemSucesso, mensagemErro } from '../components/toastr';

const RebalancearCarteira = () => {

    const [carteira, setCarteira] = useState([]);
    const [searchParams] = useSearchParams();
    var ativos = [];

    useEffect(() => {
        axios.get(`${BASE_URL}/ativos?carteira_id=1&carteira_id=2`)
            .then(response => {
                setCarteira(response.data);
            })
    }, []);

    const navigate = useNavigate();

    const voltar = () => {
        navigate(-1);
    };

    const excluir = (id) =>{
        setCarteira(carteira.filter(ativo => ativo.id !== id));
        mensagemSucesso("Ativo adquirido com sucesso!");
    }

    return (
        <>
            <Navbar title="Gerenciador de investimentos" deslogar={true} listarAtivos={true}/>
            <div className='container py-5 h-100'>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-7">
                        <Card className='text-center' title='Recomendações de ativos para rebalanceamento'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='bs-component'>

                                        <div className='row'>
                                            <div className='col-sm-12 mb-2'>
                                                <div className='bs-component'>
                                                    <table className='table table-hover'>
                                                        <thead>
                                                            <tr>
                                                                <th>Nome</th>
                                                                <th> Preço médio </th>
                                                                <th>rentabilidade</th>
                                                                <th className="d-none d-sm-table-cell" >Quantidade recomendada</th>
                                                                <th className="d-none d-sm-table-cell" ></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {

                                                                carteira?.map(x => (
                                                                    <tr key={x.id}>
                                                                        <td style={{ cursor: "pointer" }} >{x.nome} </td>
                                                                        <td >{x.preco} </td>
                                                                        <td> {x.rentabilidade}</td>
                                                                        <td >{Math.floor(Math.random() * 100)}</td>
                                                                        <td >
                                                                            <Link onClick={() => excluir(x.id)} className='btn btn-success'>
                                                                                Comprar
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>


                                        <Link className='btn btn-success' onClick={voltar}>Voltar</Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RebalancearCarteira;
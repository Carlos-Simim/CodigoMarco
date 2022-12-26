import React from 'react';
import Card from '../components/card';
import { useState, useEffect } from "react";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import { Link } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
import { getCarteiras } from '../services/carteiraservice';

const ListaCarteiras = () => {

    //const navigate = useNavigate();
    const [carteiras, setCarteiras] = useState([]);

    useEffect(() => {
        getCarteiras()
            .then(response => {
                setCarteiras(response.carteiras);
        })
    }, []);


    const onClickCarteira = (x) => {
        // navigate({
        //  pathname:"carteira/get",
        //  search: `carteira_id=${x.id}`
        // });
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
                                <tbody>
                                    {
                                        carteiras?.map(x => (
                                            <tr key={x.id}>
                                                <td onClick={() => onClickCarteira(x)} style={{ cursor: "pointer" }} >{x.nome} </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <button
                        type='button'
                        className='btn btn-success'
                        style={{ float: 'right' }}
                    >
                        Cadastrar carteira
                    </button> */}
                <Link style={{ float: 'right' }} className='btn btn-success' to={getTo('/cadastro-carteira') ? '#' : '/cadastro-carteira'}>Cadastrar carteira</Link>
            </Card>
            <Footer />
        </div>
    );
}

export default ListaCarteiras;
import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';


class ListaCarteiras extends React.Component {
    
    render() {
        return (
            <div className='container'>
                <Card title='Carteiras'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <table className='table table-hover'>                                    
                                    <tbody>
                                        <tr>
                                            <td>Carteira 1</td>                                            
                                        </tr>
                                        <tr>
                                            <td>Carteira 2</td>
                                        </tr>
                                        <tr>
                                            <td>Carteira 3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <button
                        type='button'
                        className='btn btn-success'
                        style={{ float: 'right' }}
                    >
                        Cadastrar carteira
                    </button>
                </Card>
            </div>
        );
    };

}

export default ListaCarteiras;
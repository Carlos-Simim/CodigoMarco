import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box, { BoxProps } from '@mui/material/Box';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';
import CadastroUsuario from './cadastro-usuario';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 15,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

class DetalheCarteira extends React.Component {

    App = () => {
        const [posts, setPosts] = useState([]);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setPosts(data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, []);

        return (
            <div className='container'>
                <Card title='Detalhes Carteira'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bs-component'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        p: 1,
                                        m: 1,
                                        bgcolor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                >
                                    <Item>Gráfico</Item>
                                    <Item>Indicadores</Item>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    p: 1,
                                    m: 1,
                                    bgcolor: 'grey',
                                    borderRadius: 1,
                                }}>
                                    teste
                                </Box>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    };

}

export default DetalheCarteira;
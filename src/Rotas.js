import React from 'react';

import CadastroUsuario from './views/cadastro-usuario';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CadastroAtivo from './views/cadastro-ativo';
import CadastroCarteira from './views/cadastro-carteira';
import ListaCarteiras from './views/lista-carteiras';
import Login from './views/login';

function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro-usuarios' element={<CadastroUsuario />} />
        <Route path='/cadastro-ativo' element={<CadastroAtivo />} />
        <Route path='/cadastro-carteira' element={<CadastroCarteira />} />
        <Route path='/lista-carteiras' element={<ListaCarteiras />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
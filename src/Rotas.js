import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css';
import './custom.css';
import 'toastr/build/toastr.min';
import 'toastr/build/toastr.css';

import CadastroUsuario from './views/cadastro-usuario';

import { Route, Routes, Navigate } from 'react-router-dom';
import CadastroAtivo from './views/cadastro-ativo';
import CadastroCarteira from './views/cadastro-carteira';
import ListaCarteiras from './views/lista-carteiras';
import LoginPage from './views/login';
import DetalheCarteira from './views/detalhe-carteira';
import DetalheAtivo from './views/detalhe-ativo';
import RebalancearCarteira from './views/rebalancear-carteira';

const Rotas = () => {

  const RequireAuth = ({ children }) => {
    return localStorage.getItem("token") ? children: <Navigate to="/" />
  }

  return (
    
      <Routes>

        <Route path='/' element={<LoginPage />} />

        <Route path='/cadastro-usuarios' element={<CadastroUsuario />} />

        <Route  path='/cadastro-ativo' element={ <RequireAuth> <CadastroAtivo /> </RequireAuth>  } />  

        <Route  path='/editar-ativo/:idParam' element={ <RequireAuth> <CadastroAtivo /> </RequireAuth>  } /> 

        <Route path='/cadastro-carteira' element={ <RequireAuth>  <CadastroCarteira />  </RequireAuth>  } />

        <Route path='/editar-carteira/:idParam' element={ <RequireAuth>  <CadastroCarteira />  </RequireAuth>  } />
        
        <Route  path='/lista-carteiras' element={ <RequireAuth> <ListaCarteiras /> </RequireAuth>  } />  
        
        <Route path='/carteira' element={ <RequireAuth>  <DetalheCarteira />  </RequireAuth>  } />      

        <Route path='/ativo' element={ <RequireAuth>  <DetalheAtivo />  </RequireAuth>  } /> 
        
        <Route path='/rebalancear-carteira' element={ <RequireAuth>  <RebalancearCarteira />  </RequireAuth>  } /> 
      
      </Routes>

  );
}

export default Rotas;
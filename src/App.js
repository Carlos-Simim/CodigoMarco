import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';
import './custom.css';
import 'toastr/build/toastr.min';
import 'toastr/build/toastr.css';

import Login from './views/login';
import CadastroUsuario from './views/cadastro-usuario';
import ListaCarteiras from './views/lista-carteiras';
import CadastroCarteira from './views/cadastro-carteira';
import CadastroAtivo from './views/cadastro-ativo';
import Rotas from './Rotas';
import Navbar from './components/navbar';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Rotas />
        <Navbar />
      </div>
    );
  }
}

export default App;

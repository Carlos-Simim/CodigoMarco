import React from 'react';

import FormCadastroUsuario from '../components/form-cadastro-usuario'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

class CadastroUsuario extends React.Component {

  render() {
    return (
      <>
      <Navbar title="Faça seu cadastro aqui"/>
        <FormCadastroUsuario />
        <Footer />
      </>
    );
  }
}

export default CadastroUsuario;

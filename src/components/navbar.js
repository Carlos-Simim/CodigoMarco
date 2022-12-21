import React from 'react';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          Gerenciador de carteiras
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/cadastro-usuarios'
              label='CadastroUsuários'
            />
            <NavbarItem
              render='true'
              href='/cadastro-ativo'
              label='CadastroAtivos'
            />
            <NavbarItem
              render='true'
              href='/cadastro-carteira'
              label='CadastroCarteiras'
            />
            <NavbarItem
              render='true'
              href='/lista-carteiras'
              label='ListaCarteiras'
            />
            <NavbarItem
              render='true'
              href='/login'
              label='Login'
            />
            <NavbarItem
              render='true'
              href='/detalhe-carteira'
              label='DetalheCarteira'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
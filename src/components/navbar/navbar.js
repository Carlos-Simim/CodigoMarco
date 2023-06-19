import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { doLogout } from '../../services/authservice';

const Navbar = (props) => {

  const navigate = useNavigate();

  const cleanAndRedirect = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  const onLogoutClick = (event) => {
    doLogout(localStorage.getItem('token'))
      .then(response => cleanAndRedirect())
      .catch(error => {
        console.error(error);
        cleanAndRedirect();
      })
  }

  const getTo = (toName) => {
    return window.location.pathname === toName ? true : false;
  };


  return (
    <div className='navbar fixed-top rounded border-dark bg-black'>
      <div className='container'>

        <h2 className='navbar-brand text-white' onClick={() => navigate("/lista-carteiras")} style={{ cursor: 'pointer' }}> Gerenciador de carteiras </h2>

        <div className="button-group">

          {props?.listarAtivos ? (
            <Link
              style={{ textDecoration: "none", marginRight: 10 }}
              className="btn btn-outline-secondary my-2 my-sm-0"
              to={getTo("/lista-ativos") ? "#" : "/lista-ativos"}
            >
              Listar Ativos
            </Link>
          ) : ''}

          {
            props?.deslogar ?
              (
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  onClick={onLogoutClick}
                  type="submit"
                >
                  Sair
                </button>
              ) : ''};
        </div>
      </div>
    </div>
  );
}

export default Navbar;
import React from 'react';
import { useNavigate } from "react-router-dom";
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


  return (
    <div className='navbar fixed-top rounded border-dark bg-black'>
      <div className='container'>

        <h2 className='navbar-brand text-white'> {props?.title} </h2>



        {
          props?.deslogar ? (<button className="btn btn-outline-success my-2 my-sm-0" onClick={onLogoutClick} type="submit">Sair</button>) : ''
        }

        {/* <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}

      </div>
    </div>
  );
}

export default Navbar;
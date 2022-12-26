import React from 'react';
import FormLogin from '../components/login';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

class LoginPage extends React.Component {

    render() {

        return (
            <>
                <Navbar title="Gerenciador de investimentos"/>
                <FormLogin />
                <Footer />
            </>
        );
    };

}

export default LoginPage;
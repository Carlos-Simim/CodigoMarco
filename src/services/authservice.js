//import axios from './baseservice';

//const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export async function doLogin(email, password) {
    // const loginUrl = `${API_URL}/login`;
    // const response = await axios.post(loginUrl, { email, password });
    // return response.data;
    
    if ( email === 'email@email.com.br' && password === '1234' ){
        return {token:'123456789'};
    }

    throw new Error('Invalid user and/or password!');

}

export async function doLogout(token) {
    localStorage.removeItem('token');
    // const logoutUrl = `${API_URL}/logout`;
    // const headers = { 'authorization': token };
    // const response = await axios.post(logoutUrl, {}, { headers });
    // return response.data;
    return {msg:'ok',status:200}
}
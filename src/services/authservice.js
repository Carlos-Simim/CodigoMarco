import axios from './baseservice';
import { BASE_URL } from "../utils/requests";


export async function doLogin(email, senha) {
    const loginUrl = `${BASE_URL}/usuario/auth`;
    const response = await axios.post(loginUrl, { email: email, senha: senha });
    return response.data;
}

export async function doLogout(token) {
    localStorage.removeItem('token');
    // const logoutUrl = `${BASE_URL}/logout`;
    // const headers = { 'authorization': token };
    // const response = await axios.post(logoutUrl, {}, { headers });
    // return response.data;
    return {msg:'ok',status:200}
}
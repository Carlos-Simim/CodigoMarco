export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://lp3-backend.herokuapp.com/api/v1';

export function parseData(data){
    var ano = data.toString().split(',')[0];
    var mes = data.toString().split(',')[1];
    var dia = data.toString().split(',')[2];
        
    return dia + "/" + mes + "/" + ano;
}

import { BASE_URL } from "../utils/requests";
import axios from 'axios';

export async function getCarteiras() {

    await axios.get(`${BASE_URL}/carteiras`)
      .then(response => {
        return response;
      }).catch(err =>{
        return [];
      }
      )

}
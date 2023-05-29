import { BASE_URL } from "../utils/requests";
import axios from "axios";

export async function getCarteiras() {
  await axios
    .get(`${BASE_URL}/carteira`)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((err) => {
      return [];
    });
}

export async function getCarteira(id) {
  await axios
    .get(`${BASE_URL}/carteira?carteira_id=${id}`)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((err) => {
      return [];
    });
}

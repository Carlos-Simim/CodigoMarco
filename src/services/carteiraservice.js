import { BASE_URL } from "../utils/requests";
import axios from "axios";

export async function getCarteiras() {
  const token = localStorage.getItem("token"); // Obtenha o token do LocalStorage

  await axios
    .get(`${BASE_URL}/carteira`, {
      headers: {
        Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return [];
    });
}

export async function getCarteira(id) {
  const token = localStorage.getItem("token"); // Obtenha o token do LocalStorage

  await axios
    .get(`${BASE_URL}/carteira?carteira_id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return [];
    });
}

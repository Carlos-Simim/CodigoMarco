import React from "react";
import Card from "../components/card";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { mensagemSucesso } from "../components/toastr";
import { parseData } from "../utils/requests";
import { doLogout } from "../services/authservice";
import { BASE_URL } from "../utils/requests";
import axios from "axios";

const ListaCarteiras = () => {
  const navigate = useNavigate();
  const [carteiras, setCarteiras] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtenha o token do LocalStorage

    if (!token) {
      doLogout();
      navigate("/");
    }

    axios
      .get(`${BASE_URL}/carteira`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
        },
      })

      .then((response) => {
        setCarteiras(response.data);
      });
  }, []);

  const onClickCarteira = (x) => {
    navigate(`/carteira?carteira_id=${x.id}`);
  };

  const getTo = (toName) => {
    return window.location.pathname === toName ? true : false;
  };

  function editar(id) {
    navigate(`/editar-carteira/carteira?carteira_id=${id}`);
  }

  function excluir(id) {
    const token = localStorage.getItem("token"); // Obtenha o token do LocalStorage

    if (!token) {
      doLogout();
      navigate("/");
    }

    axios
      .delete(`${BASE_URL}/carteira/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
        },
      })
      .then((response) => {
        mensagemSucesso("Carteira excluída com sucesso!");
        setCarteiras(carteiras.filter((x) => x.id !== id));
      });
  }

  return (
    <div className="container">
      <Navbar
        title="Gerenciador de carteiras"
        deslogar={true}
        listarAtivos={true}
      />
      <Card title="Carteiras">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th className="d-none d-sm-table-cell">Data criação</th>
                    <th className="d-none d-sm-table-cell">Data modificação</th>
                    <th className="d-none d-sm-table-cell">Editar</th>
                    <th className="d-none d-sm-table-cell">Deletar</th>
                  </tr>
                </thead>
                <tbody>
                  {carteiras?.map((x) => (
                    <tr key={x.id}>
                      <td
                        onClick={() => onClickCarteira(x)}
                        style={{ cursor: "pointer" }}
                      >
                        {x.nome}{" "}
                      </td>
                      <td>{parseData(x.dataCriacao)} </td>
                      <td>{parseData(x.dataModificacao)} </td>
                      <td>
                        <IconButton
                          aria-label="edit"
                          onClick={() => editar(x.id)}
                        >
                          <EditIcon />
                        </IconButton>
                      </td>
                      <td>
                        <IconButton
                          aria-label="delete"
                          onClick={() => excluir(x.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Link
          style={{ float: "right" }}
          className="btn btn-success"
          to={getTo("/cadastro-carteira") ? "#" : "/cadastro-carteira"}
        >
          Cadastrar carteira
        </Link>
      </Card>
      <Footer />
    </div>
  );
};

export default ListaCarteiras;

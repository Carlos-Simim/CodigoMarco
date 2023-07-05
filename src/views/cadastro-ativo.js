import React from "react";

import Stack from "@mui/material/Stack";

import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useState, useEffect } from "react";
import { mensagemErro, mensagemSucesso } from "../components/toastr";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { BASE_URL } from "../utils/requests";
import axios from "axios";
import { doLogout } from "../services/authservice";

const CadastroAtivo = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtenha o token do LocalStorage

    if (!token) {
      doLogout();
      navigate("/");
    }

    if (searchParams.get("ativo_id") != null) {
      axios
        .get(`${BASE_URL}/ativo/${searchParams.get("ativo_id")}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
          },
        })
        .then((response) => {
          setNome(response.data.nome);
          setTipo(response.data.tipo);
        });
    }
  }, []);

  const cadastrar = () => {
    const token = localStorage.getItem("token"); // Obtenha o token do LocalStorage

    if (!token) {
      doLogout();
      navigate("/");
    }

    if (searchParams.get("ativo_id") == null) {
      axios
        .post(
          `${BASE_URL}/ativo`,
          {
            nome: nome,
            tipo: tipo,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
            },
          }
        )
        .then((response) => {
          mensagemSucesso(`Ativo ${nome} cadastrada com sucesso!`);
          navigate("/lista-ativos");
        })
        .catch((error) => {
          mensagemErro(error.response.data);
        });
    } else {
      axios
        .put(
          `${BASE_URL}/ativo/${searchParams.get("ativo_id")}`,
          {
            nome: nome,
            tipo: tipo,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
            },
          }
        )
        .then((response) => {
          mensagemSucesso(`Ativo ${nome} editado com sucesso!`);
          navigate("/lista-ativos");
        })
        .catch((error) => {
          mensagemErro(error.response.data);
        });
    }
  };

  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <div className="container">
      <Navbar deslogar={true} listarAtivos={true} />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <Card
              title={
                searchParams.get("ativo_id") == null
                  ? "Cadastro de Ativo"
                  : "Editar Ativo"
              }
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <FormGroup label="Nome: *" htmlFor="inputNome">
                      <input
                        type="text"
                        id="inputNome"
                        value={nome}
                        className="form-control"
                        name="nome"
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup label="Tipo: *" htmlFor="inputTipo">
                      <input
                        type="text"
                        id="inputTipo"
                        value={tipo}
                        className="form-control"
                        name="tipo"
                        onChange={(e) => setTipo(e.target.value)}
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
              <Stack spacing={1} direction="row" style={{ marginTop: "20px" }}>
                <button
                  onClick={cadastrar}
                  type="button"
                  className="btn btn-success"
                >
                  Salvar
                </button>
                <button
                  onClick={() => navigate(-1)}
                  type="button"
                  className="btn btn-danger"
                >
                  Cancelar
                </button>
              </Stack>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CadastroAtivo;

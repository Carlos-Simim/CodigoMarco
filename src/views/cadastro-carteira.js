import React from "react";

import Stack from "@mui/material/Stack";

import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useNavigate, useSearchParams } from "react-router-dom";
import { mensagemSucesso } from "../components/toastr";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { BASE_URL } from "../utils/requests";
import axios from "axios";

const CadastroCarteira = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [nome, setNome] = useState("");
  const [datacriacao, setDataCriacao] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  useEffect(() => {
    if (searchParams.get("carteira_id") != null) {
      axios
        .get(`${BASE_URL}/carteira/${searchParams.get("carteira_id")}`)
        .then((response) => {
          const year = response.data.dataModificacao[0];
          const month =
            response.data.dataModificacao[1].toString().length === 1
              ? "0" + response.data.dataModificacao[1].toString()
              : response.data.dataModificacao[1].toString();
          const day =
            response.data.dataModificacao[2].toString().length === 1
              ? "0" + response.data.dataModificacao[2].toString()
              : response.data.dataModificacao[2].toString();

          const data = `${year}-${month}-${day}`;
          setNome(response.data.nome);
          setDataCriacao(data);
          setUsuarioId(response.data.usuarioId);
        });
    }
  }, []);

  const cadastrar = () => {
    if (searchParams.get("carteira_id") == null) {
      axios
        .post(`${BASE_URL}/carteira`, {
          nome: nome,
          usuarioId: 1,
        })
        .then((response) => {
          mensagemSucesso(`Carteira ${nome} cadastrada com sucesso!`);
          navigate("/lista-carteiras");
        });
    } else {
      axios
        .put(`${BASE_URL}/carteira/${searchParams.get("carteira_id")}`, {
          nome: nome,
          dataModificacao: datacriacao + "T00:00:00.000Z",
          usuarioId: usuarioId,
        })
        .then((response) => {
          mensagemSucesso(`Carteira ${nome} editada com sucesso!`);
          navigate("/lista-carteiras");
        });
    }
  };

  const cancelar = () => {
    navigate("/lista-carteiras");
  };

  return (
    <div className="container">
      <Navbar deslogar={true} listarAtivos={true} />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <Card
              title={
                searchParams.get("carteira_id") == null
                  ? "Cadastro de Carteira"
                  : "Editar Carteira"
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
                    <FormGroup
                      label="Data da criação: *"
                      htmlFor="inputDataDaCriacao"
                    >
                      <input
                        type="date"
                        id="inputinputDataDaCriacaoSenha"
                        value={datacriacao}
                        className="form-control"
                        name="dataDaCriacao"
                        onChange={(e) => setDataCriacao(e.target.value)}
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
              <Stack spacing={1} direction="row" style={{ marginTop: "20px" }}>
                <button className="btn btn-success" onClick={cadastrar}>
                  Salvar
                </button>
                <button className="btn btn-danger" onClick={cancelar}>
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

export default CadastroCarteira;

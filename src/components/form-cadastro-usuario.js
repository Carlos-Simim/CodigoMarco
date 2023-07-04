import React from "react";

import Stack from "@mui/material/Stack";

import Card from "../components/card";
import FormGroup from "../components/form-group";

import { mensagemSucesso } from "../components/toastr";
import { mensagemErro } from "../components/toastr";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/requests";

const FormCadastroUsuario = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");
  const [admin, setAdmin] = useState(false);

  const cadastrar = () => {
    if (senha !== senhaRepeticao) {
      mensagemErro("As senhas informadas são diferentes.");
      return false;
    }
    axios
      .post(`${BASE_URL}/usuario`, {
        nome: nome,
        telefone: telefone,
        email: email,
        login: email,
        senha: senha,
        admin: admin,
      })
      .then((response) => {
        mensagemSucesso("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };
  const cancelar = () => {
    navigate("/");
  };
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <Card title="Cadastro de Usuário">
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
                      autoComplete="nope"
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup label="Celular: *" htmlFor="inputTelefone">
                    <input
                      type="text"
                      id="inputCelular"
                      value={telefone}
                      className="form-control"
                      name="celular"
                      autoComplete="nope"
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup label="Email: *" htmlFor="inputEmail">
                    <input
                      type="email"
                      id="inputEmail"
                      value={email}
                      className="form-control"
                      name="email"
                      autoComplete="nope"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup label="Senha: *" htmlFor="inputSenha">
                    <input
                      type="password"
                      id="inputSenha"
                      value={senha}
                      className="form-control"
                      name="senha"
                      autoComplete="nope"
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup
                    label="Repita a Senha: *"
                    htmlFor="inputRepitaSenha"
                  >
                    <input
                      type="password"
                      id="inputRepitaSenha"
                      value={senhaRepeticao}
                      className="form-control"
                      name="senha"
                      autoComplete="nope"
                      onChange={(e) => setSenhaRepeticao(e.target.value)}
                    />
                  </FormGroup>
                  <Stack
                    spacing={1}
                    direction="row"
                    style={{ marginTop: "20px" }}
                  >
                    <Link className="btn btn-success" onClick={cadastrar}>
                      Salvar
                    </Link>
                    <Link className="btn btn-danger" onClick={cancelar}>
                      Cancelar
                    </Link>
                  </Stack>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default FormCadastroUsuario;

import React, { useState, useEffect } from "react";

import Card from "../components/card";
import { Tab, Tabs } from "@mui/material";

import { BASE_URL, parseData } from "../utils/requests";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SeriesChart from "../components/serieschart";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TabelaHistoricoPrecos from "../components/tabela-historico-precos";
import TabelaHistoricoProventos from "../components/tabela-historico-proventos";
import { doLogout } from "../services/authservice";

const DetalheAtivoAdquirido = () => {
  const [searchParams] = useSearchParams();
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  const [retorno, setRetorno] = useState("");
  const [volatilidade, setVolatilidade] = useState("");

  const [quantidade, setQuantidade] = useState("");
  const [dataaquisicao, setDataAquisicao] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [ativoId, setAtivoId] = useState("");
  const [historicoPrecos, setHistoricoPrecos] = useState([]);
  const [historicoProventos, setHistoricoProventos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Obtenha o token do LocalStorage

    if (!token) {
      doLogout();
      navigate("/");
    }

    axios
      .get(`${BASE_URL}/ativoadquirido/${searchParams.get("ativo_id")}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
        },
      })
      .then((response) => {
        console.log(response);

        setNome(response.data.ativoDto.nome);
        setPreco(response.data.valor);
        setQuantidade(response.data.quantidade);
        setDataAquisicao(response.data.dataAquisicao);
        setAtivoId(response.data.ativoId);
        setRetorno(response.data.retorno);
        setVolatilidade(response.data.volatilidade);

        axios
          .get(`${BASE_URL}/historicopreco/ativo_id=${response.data.ativoId}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
            },
          })
          .then((response) => {
            setHistoricoPrecos(response.data);
          });
        axios
          .get(
            `${BASE_URL}/historicoprovento/ativo_id=${response.data.ativoId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Adicione o token como header de autorização
              },
            }
          )
          .then((response) => {
            setHistoricoProventos(response.data);
          });
      });
  }, []);

  const voltar = () => {
    navigate(-1);
  };

  const divStyle = {
    backgroundColor: "rgba(211, 211, 211, 0.75)",
  };

  const divStyleDentro = {
    backgroundColor: "rgba(211, 211, 211, 0.5)",
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="container" style={{ marginBottom: 150 }}>
      <Navbar title={nome} deslogar={true} listarAtivos={true} />
      <Card title="Detalhes do Ativo Adquirido">
        <div className="row">
          <div className="col-sm-6 mb-2">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Indicador</th>
                  <th> Valor </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nome do ativo</td>
                  <td>{nome}</td>
                </tr>
                <tr>
                  <td>Preço na aquisição</td>
                  <td>R${preco}</td>
                </tr>
                <tr>
                  <td>Volatilidade</td>
                  <td>{volatilidade}</td>
                </tr>
                <tr>
                  <td>Retorno</td>
                  <td>{retorno}</td>
                </tr>
                <tr>
                  <td> Data Aquisicao </td>
                  <td>{parseData(dataaquisicao)}</td>
                </tr>
                <tr>
                  <td>Quantidade </td>
                  <td>{quantidade}</td>
                </tr>
                <tr>
                  <td>Total </td>
                  <td>R${quantidade * preco}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6 mb-2">
            <SeriesChart />
          </div>
        </div>
        <div style={divStyle}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Histórico de preços" />
            <Tab label="Histórico de proventos" />
          </Tabs>
        </div>
        <div style={divStyleDentro}>
          {tabValue === 0 && (
            <TabelaHistoricoPrecos historicoPrecos={historicoPrecos} />
          )}
          {tabValue === 1 && (
            <TabelaHistoricoProventos historicoProventos={historicoProventos} />
          )}
        </div>
        <Stack spacing={1} direction="row" style={{ marginTop: "0" }}>
          <button className="btn btn-success" onClick={voltar}>
            Voltar
          </button>
        </Stack>
      </Card>

      <Footer />
    </div>
  );
};

export default DetalheAtivoAdquirido;

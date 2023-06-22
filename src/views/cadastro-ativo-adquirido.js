import React from "react";

import Stack from "@mui/material/Stack";

import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useState, useEffect } from "react";
import { mensagemSucesso } from "../components/toastr";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { BASE_URL, parseData } from "../utils/requests";
import axios from "axios";
import { useParams } from 'react-router-dom';

const CadastroAtivoAdquirido = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("ativo_adquirido_id") != null) {
      axios
        .get(`${BASE_URL}/ativoadquirido/${searchParams.get("ativo_adquirido_id")}`)
        .then((response) => {
          setAtivoId(response.data.ativoId);
          setValor(response.data.valor);
          setQuantidade(response.data.quantidade);
          setDataAquisicao(formatarData(response.data.dataAquisicao));
        });
    }
    axios
      .get(`${BASE_URL}/ativo`)
      .then((response) => { 
        setListaAtivos(response.data);
      });    
  }, []);

  const cadastrar = () => {
    if (searchParams.get("ativo_adquirido_id") == null) {            
      axios
        .post(`${BASE_URL}/ativoadquirido`, {
          ativoId: ativoId,
          valor: valor,
          quantidade: quantidade,
          dataAquisicao: dataAquisicao + "T00:00:00.000Z",
          carteiraId: searchParams.get("carteira_id")
        })
        .then((response) => {
          navigate(`/carteira?carteira_id=${searchParams.get("carteira_id")}`);
        });
    } else {
      axios
        .put(`${BASE_URL}/ativoadquirido/${searchParams.get("ativo_adquirido_id")}`, {
          ativoId: ativoId,
          valor: valor,
          quantidade: quantidade,
          dataAquisicao: dataAquisicao + "T00:00:00.000Z",
          carteiraId: searchParams.get("carteira_id")
        })
        .then((response) => {
          navigate(`/carteira?carteira_id=${searchParams.get("carteira_id")}`);
        });
    }
  };

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function formatarData(data) {
    data = parseData(data);
    var dia = data.toString().split('/')[0];
    var mes = data.toString().split('/')[1];
    var ano = data.toString().split('/')[2];

    if(mes.split("").length == 1){
      mes = "0"+mes;
    }

    return ano+"-"+mes+"-"+dia;
  }
  
  const [ativo, setAtivo] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [dataAquisicao, setDataAquisicao] = useState(getTodayDate());
  const [listaAtivos, setListaAtivos] = useState([]);
  const [ativoId, setAtivoId] = useState("");
  const { carteiraId } = useState(searchParams.get("carteira_id"));

  return (
    <div className="container">
      <Navbar deslogar={true} listarAtivos={true}/>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-6">
            <Card
              title={
                searchParams.get("ativo_adquirido_id") == null
                  ? "Cadastro de Ativo Adquirido"
                  : "Editar Ativo Adquirido"
              }
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">                
                  <label htmlFor="ativo">Ativo</label>
                  <select
                    value={ativoId}
                    onChange={(e) => setAtivoId(e.target.value)}
                    className="form-control"
                    id="ativo"
                  >
                    <option value="">Selecione o Ativo</option>
                    {listaAtivos.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.nome}
                      </option>
                    ))}
                  </select>
                  <div className="form-group">
                    <label htmlFor="valor">Valor</label>
                    <input
                      type="text"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      className="form-control"
                      id="valor"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                      type="text"
                      value={quantidade}
                      onChange={(e) => setQuantidade(e.target.value)}
                      className="form-control"
                      id="quantidade"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dataAquisicao">Data de Aquisição</label>
                    <input
                      type="date"
                      value={dataAquisicao}
                      onChange={(e) => setDataAquisicao(e.target.value)}
                      className="form-control"
                      id="dataAquisicao"
                    />
                  </div>
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

export default CadastroAtivoAdquirido;

import React, { useState, useEffect } from "react";

import Card from "../components/card";

import { BASE_URL } from "../utils/requests";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import SeriesChart from "../components/serieschart";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { mensagemAlert } from "../components/toastr";
import { parseData } from "../utils/requests";
import { mensagemSucesso } from "../components/toastr";

const DetalheCarteira = () => {
  const [searchParams] = useSearchParams();
  const [carteira, setCarteira] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/ativoadquirido/carteira=${searchParams.get("carteira_id")}`
      )
      .then((response) => {
        setCarteira(response.data);
      });
  }, []);

  const getTo = (toName) => {
    return window.location.pathname === toName ? true : false;
  };

  const editar = (id) => {
    navigate(`/cadastro-ativo-adquirido?carteira_id=${searchParams.get("carteira_id")}&ativo_adquirido_id=${id}`);
  };

  const excluir = (id) => {    
    axios.delete(`${BASE_URL}/ativoadquirido/${id}`).then((response) => {
      mensagemSucesso("Ativo adquirido excluída com sucesso!");
      setCarteira(carteira.filter((ativo) => ativo.id !== id));
    });
  };

  const onClickAtivo = (x) => {
    navigate(`/ativo?ativo_id=${x.id}`);
  };

  return (
    <div className="container" style={{ marginBottom: 150 }}>
      <Navbar title="Gerenciador de carteiras" deslogar={true} listarAtivos={true}/>
      <Card title="Detalhes Carteira">
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
                  <td>Beta </td>
                  <td> 0.74 </td>
                </tr>
                <tr>
                  <td>Volatilidade </td>
                  <td> 1.74 </td>
                </tr>
                <tr>
                  <td>Risco </td>
                  <td> 3.54 </td>
                </tr>
                <tr>
                  <td>Retorno </td>
                  <td> 7.5 % </td>
                </tr>
                <tr>
                  <td>P/L </td>
                  <td> 0.98 </td>
                </tr>
                <tr>
                  <td>Total </td>
                  <td> R$ 15000.0 </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6 mb-2">
            <SeriesChart />
          </div>
        </div>
      </Card>
      <Card title="Ativos Adquiridos">
        <div className="row">
          <div className="col-sm-12 mb-2">
            <div className="bs-component">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th> Preço unitário </th>
                    <th>rentabilidade</th>
                    <th className="d-none d-sm-table-cell">Data aquisição</th>
                    <th className="d-none d-sm-table-cell">Editar</th>
                    <th className="d-none d-sm-table-cell">Deletar</th>
                  </tr>
                </thead>
                <tbody>
                  {carteira?.map((x) => (
                    <tr key={x.id}>
                      <td
                        onClick={() => onClickAtivo(x)}
                        style={{ cursor: "pointer" }}
                      >
                        {x.ativoDto.nome}{" "}
                      </td>
                      <td>R${x.valor}</td>
                      <td></td>
                      <td>{parseData(x.dataAquisicao)} </td>
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
          style={{ float: "left" }}
          className="btn btn-success ms-2"
          to={`/cadastro-ativo-adquirido?carteira_id=${searchParams.get("carteira_id")}`}
        >
          Cadastrar Ativo Adquirido
        </Link>
        <Link
          style={{ float: "left" }}
          className="btn btn-success ms-2"
          to={getTo("/rebalancear-carteira") ? "#" : "/rebalancear-carteira"}
        >
          Rebalancear carteira
        </Link>
        <Link
          style={{ float: "left" }}
          className="btn btn-primary ms-2"
          to={getTo("/lista-carteiras") ? "#" : "/lista-carteiras"}
        >
          Voltar
        </Link>        
      </Card>

      <Footer />
    </div>
  );
};

export default DetalheCarteira;

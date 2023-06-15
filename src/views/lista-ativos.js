import React, { useState, useEffect } from "react";
import Card from "../components/card";
import Navbar from "../components/navbar/navbar";
import { Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { mensagemSucesso } from "../components/toastr";
import { parseData } from "../utils/requests";
import { BASE_URL } from "../utils/requests";
import axios from "axios";


const ListaAtivos = () => {
    const navigate = useNavigate();
    const [ativos, setAtivos] = useState([]);
    const [searchParams] = useSearchParams();


    useEffect(() => {        
        axios
            .get(`${BASE_URL}/ativo`)
            .then((response) => {
                setAtivos(response.data);
            });
    }, []);

    const excluirAtivo = (id) => {
        axios.delete(`${BASE_URL}/ativo/${id}`).then((response) => {
            mensagemSucesso("Ativo excluído com sucesso!");
            setAtivos(ativos.filter((ativo) => ativo.id !== id));
        });
    };

    function editar(id) {
        navigate(`/editar-ativo/ativo?ativo_id=${id}`);
    }

    return (
        <div className="container" style={{ marginBottom: 150 }}>
            <Navbar deslogar={true} />
            <Card title="Lista de Ativos">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th className="d-none d-sm-table-cell">Tipo</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ativos.map((ativo) => (
                                        <tr key={ativo.id}>
                                            <td>{ativo.nome}</td>
                                            <td>{ativo.tipo}</td> 
                                            <td>
                                                <IconButton
                                                aria-label="edit"
                                                onClick={() => editar(ativo.id)}
                                                >
                                                <EditIcon />
                                                </IconButton>
                                            </td>
                                            <td>
                                                <IconButton
                                                aria-label="delete"
                                                onClick={() => excluirAtivo(ativo.id)}
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
                <>
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="btn btn-danger"
                    >
                        Voltar
                    </button>
                </>
                <>                    
                    <Link
                        style={{ float: "right" }}
                        className="btn btn-success"
                        to="/cadastro-ativo"
                    >
                        Cadastrar Ativo
                    </Link>

                </>
            </Card>
        </div>
    );

};

export default ListaAtivos;

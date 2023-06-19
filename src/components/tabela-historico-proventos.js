import React, { useState, useEffect } from 'react';
import { parseData } from '../utils/requests';

const TabelaHistoricoProventos = (props) => {

        var historicoProventos = props.historicoProventos;

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody> 
                    {historicoProventos.map((x) => (
                        <tr key={x.id}>
                            <td>{parseData(x.dataPagamento)}</td>
                            <td>{x.descricao}</td>
                            <td>R${x.valor}</td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
        );
}

export default TabelaHistoricoProventos;
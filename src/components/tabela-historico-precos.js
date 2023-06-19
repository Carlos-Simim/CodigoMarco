import React, { useState, useEffect } from 'react';
import { parseData } from '../utils/requests';

const TabelaHistoricoPrecos = (props) => {

        var historicoPrecos = props.historicoPrecos;

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>                     
                    {historicoPrecos.map((x) => (
                        <tr key={x.id}>
                            <td>{parseData(x.data)}</td>
                            <td>R${x.valor}</td>
                        </tr>
                    ))}                    
                </tbody>
            </table>
        );
}

export default TabelaHistoricoPrecos;
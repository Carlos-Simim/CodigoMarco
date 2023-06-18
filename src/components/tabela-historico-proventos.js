import React from 'react';

class TabelaHistoricoProventos extends React.Component {
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Data</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>                    
                    <tr>
                        <td>07/06/2022</td>
                        <td>R$7,45</td>
                    </tr>
                    <tr>
                        <td>09/07/2022</td>
                        <td>R$11,26</td>
                    </tr>  
                </tbody>
            </table>
        )
    }
}

export default TabelaHistoricoProventos;
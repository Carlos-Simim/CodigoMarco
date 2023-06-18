import React from 'react';

class TabelaHistoricoPrecos extends React.Component {
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
                        <td>15/05/2023</td>
                        <td>R$25,15</td>
                    </tr>
                    <tr>
                        <td>16/05/2023</td>
                        <td>R$25,26</td>
                    </tr>                    
                </tbody>
            </table>
        )
    }
}

export default TabelaHistoricoPrecos;
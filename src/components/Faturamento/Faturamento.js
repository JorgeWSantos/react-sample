import React, {Component} from 'react'
import { consultarFaturamento } from '../../services/faturamento';

export default class Faturamento extends Component{

    constructor(props){

        super(props);
        this.state = {
            detalhamento: []
        }
    }

    componentDidMount(){
        consultarFaturamento().then(dados => this.setState(dados))
    }

    render(){
        return(
            <div className="ml-2 mr-2">
                <h2 className="mt-2 text-left">Faturamento</h2>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-left">
                                Total por forma de pagamento
                            </div>
                            <div className="card-body">
                                
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-left">Descrição</th>
                                            <th className="text-right">Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.detalhamento.map((item, indice) => {
                                            return(
                                                <tr key={indice}>
                                                    <td className="text-left">{item.descricao}</td>
                                                    <td className="text-right">
                                                        {item.valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
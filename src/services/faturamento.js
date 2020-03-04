import {url} from './api'

export function consultarFaturamento(){

    return fetch(`${url}/faturamento`).then(res => res.json())
}
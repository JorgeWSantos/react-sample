import {url} from './api'

export function listarConsultas(){

    return fetch(`${url}/consultas`).then(res => res.json())
}
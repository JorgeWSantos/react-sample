import {url} from './api'

export function consultarResumo(){

    return fetch(`${url}/resumo`).then(res => res.json())
}
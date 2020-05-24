import {apiUrl} from './Url';
export const getPizzas = () => {
     return fetch(apiUrl + "api/pizzas")
     .then(resp => resp.json()).then(data => data.data).catch(err => window.console.log(err))   
}

export const getOnePizza = (id) => {
     return fetch(apiUrl + "api/pizzas/" + id)
     .then(resp => resp.json()).then(data => data.data).catch(err => window.console.log(err)) 
}
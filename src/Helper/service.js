import {apiUrl} from './Url';
export const getPizzas = () => {
     return fetch(apiUrl + "api/pizzas")
     .then(resp => resp.json()).then(data => data.data).catch(err => console.log(err))
    
}
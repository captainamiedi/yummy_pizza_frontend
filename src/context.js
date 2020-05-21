import React, {Component} from 'react';
import {getPizzas} from './Helper/service';
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export default class ProductProvider  extends Component {
    state = {
        pizza: [],
        cart: []
    }
    async componentDidMount() {
        this.setState({pizza: await getPizzas()});
        // console.log( this.state);
    }

    // GET PIZZA ID
    getPizza = (id) => {
        const pizza = this.state.pizza.find(item => item.id === id);
        return pizza;
    }

    // ADD TO CART
    addToCart = (id) => {
        let tempPizza = [...this.state.pizza];
        const index = tempPizza.indexOf(this.getPizza(id));
        const pizza = tempPizza[index];
        pizza.in_cart = true;
        pizza.count = 1;
        const price = pizza.price;
        pizza.total = price;
        this.setState(() => {
            return {pizza: tempPizza, cart: [...this.state.cart, pizza]}
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export { ProductConsumer, ProductContext}
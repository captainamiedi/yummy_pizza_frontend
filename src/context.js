import React, {Component} from 'react';
import {getPizzas, getOnePizza} from './Helper/service';
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export default class ProductProvider  extends Component {
    state = {
        pizza: [],
        cart: [],
        detailPizza: {},
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        delivery: 200
    }
    componentDidMount() {
        // this.setState({pizza: await getPizzas()});
        this.setPizza();
    }

    setPizza =async () => {
        this.setState({
            pizza: await getPizzas()
        })
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
        }, () => {
            this.addTotal();
        })
    }

    // GET ONE PIZZA
    handleDetails =async (id) => {
        // const onePizza = await getOnePizza(id); /* These can work if a user cart history is tracked*/
        const onePizza = this.getPizza(id); 
        this.setState({
            detailPizza: onePizza
        })
    }

    // ADD TOTAL OF PIZZA IN CART
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map((item) => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = (parseInt(subTotal)) + tax + this.state.delivery;
        this.setState(()=> {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    // INCREMENT OF PIZZA IN CART
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedPizza = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedPizza);
        const pizza = tempCart[index];
        pizza.count = pizza.count + 1;
        pizza.total = pizza.count * pizza.price;
        this.setState(()=>{return {cart: [...tempCart]}}, ()=>{this.addTotal()})
    }

    // DECREASE OF PIZZA QUANTITY IN CART
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedPizza = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedPizza);
        const pizza = tempCart[index];
        pizza.count = pizza.count - 1;
        if (pizza.count === 0) {
            this.removeItem(id)
        } else {
            pizza.total = pizza.count * pizza.price;
            this.setState(()=>{return {cart: [...tempCart]}}, ()=>{this.addTotal()})
        }
    }

    // REMOVE PIZZA FROM CART
    removeItem = (id) => {
        let tempPizza = [...this.state.pizza];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id); 
        const index = tempPizza.indexOf(this.getPizza(id));
        let removedPizza = tempPizza[index];
        removedPizza.in_cart = false;
        removedPizza.count = 0;
        removedPizza.total = 0;

        this.setState(()=> {
            return {
                cart: [...tempCart],
                pizza: [...tempPizza]
            }
        }, () => {
            this.addTotal();
        });
    }

    // CLEAR CART
    clearCart =async () => {
        this.setState(()=>{
            return {
                cart: [],
                // isShow: true
            }
        }, ()=>{
            this.setPizza();
            this.addTotal();
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                handleDetails: this.handleDetails,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export { ProductConsumer, ProductContext}
import React, {Component} from 'react';
import {getPizzas} from './Helper/service';
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
        delivery: 200,
        modalOpen: false,
        modalPizza: {},
        cartTotalInEuro: 0,
        totalChange: false
    }
    componentDidMount() {
        // this.setState({pizza: await getPizzas()});
        this.setPizza();
        const data = localStorage.getItem('cart');
        const dataSubTotal = localStorage.getItem('sub-total');
        const dataTax = localStorage.getItem('tax');
        const dataTotal = localStorage.getItem('total');
        const dataEuro = localStorage.getItem('euro');
        // data ? this.setState({cart: JSON.parse(data)}) : []
        // console.log(data);
        if (data) {
            this.setState({
                cart: JSON.parse(data),
                cartSubTotal: JSON.parse(dataSubTotal),
                cartTax: JSON.parse(dataTax),
                cartTotal: JSON.parse(dataTotal),
                cartTotalInEuro: JSON.parse(dataEuro)
            })
        } else {
            this.setState({
                cart: []})
        }
        // data ? this.setState({cart: data}) : [];
    }

    componentDidUpdate() {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
        localStorage.setItem('total', JSON.stringify(this.state.cartTotal))
        localStorage.setItem('sub-total', JSON.stringify(this.state.cartSubTotal))
        localStorage.setItem('tax', JSON.stringify(this.state.cartTax));
        localStorage.setItem('euro', JSON.stringify(this.state.cartTotalInEuro));
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
        const totalInEuro = total * 0.91
        this.setState(()=> {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total,
                cartTotalInEuro: Math.round(totalInEuro)
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

    // OPEN MODAL
    openModal = (id) => {
        const pizza = this.getPizza(id);
        this.setState(()=> {
            return {modalPizza: pizza, modalOpen: true}
        })
    }

    // CLOSE MODAL
    closeModal = () => {
        this.setState(()=>{
            return { modalOpen: false }
        });
    }

    // CHANGE TOTAL CURRENCY
    toggleTotal = () => {
        this.setState({
            totalChange: !this.state.totalChange
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
                openModal: this.openModal,
                closeModal: this.closeModal,
                toggleTotal: this.toggleTotal,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export { ProductConsumer, ProductContext}
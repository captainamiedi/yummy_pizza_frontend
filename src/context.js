import React, {Component} from 'react';
import {getPizzas} from './Helper/service';
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export default class ProductProvider  extends Component {
    state = {
        pizza: []
    }
    async componentDidMount() {
        this.setState({pizza: await getPizzas()});
        console.log( this.state);
    }
    render() {
        return (
            <ProductContext.Provider value={{}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export { ProductConsumer, ProductContext}
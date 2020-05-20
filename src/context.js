import React, {Component} from 'react';
const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export default class ProductProvider extends Component {

}

export { ProductConsumer, ProductContext}
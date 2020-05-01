import React, { Component } from 'react';

export class ShowProducts extends Component {

    render() {
        const productsNames = this.props.productsNames;

        return (
             <div>
                <ul>
                    { productsNames.map( (productName, index ) => <li key={ index }>{productName.name}</li>) }
                </ul>
            </div>
        );
    }
}

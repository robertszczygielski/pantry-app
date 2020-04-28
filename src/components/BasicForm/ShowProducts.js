import React, { Component } from 'react';

export class ShowProducts extends Component {

    render() {
        const productsNames = this.props.productsNames;

        return (
             <div>
                <ul>
                    { productsNames.map(person => <li>{person}</li>) }
                </ul>
            </div>
        );
    }
}

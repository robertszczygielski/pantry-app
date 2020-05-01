import React, { Component } from 'react';

export class ShowProducts extends Component {

    render() {
        const productsNames = this.props.productsNames;

        return (
             <div>
                <ul>
                    <li>{productsNames}</li>
                </ul>
            </div>
        );
    }
}

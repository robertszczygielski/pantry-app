import React, { Component } from 'react';
import { Field, Form, Formik } from "formik";
import { addProduct, getProducts, updateProduct } from "../../restapi/BeckEnd/Product";
import { ShowProducts } from "./ShowProducts";

export class BasicForm extends Component {
    state = {
        product: null
    }

    componentDidMount() {
        getProducts().then( (response = {})  => {
            this.setState({ product: response.productsDto });
        }).catch();
    }

    onSubmit = async value => {
        await addProduct(value);
        getProducts().then( response  => {
            this.setState({ product: response.productsDto });
        }).catch();
    };

    onNameChange = async (id, newName) => {
        await updateProduct(id, newName);

        getProducts().then( response  => {
            this.setState({ product: response.productsDto });
        }).catch();
    }

    render() {
        return (
            <>
                <div>
                    <h2>
                      Enter New Product:
                    </h2>
                    <Formik
                        initialValues={{ name: "", amount: "" }}
                        onSubmit={this.onSubmit}
                    >
                        {() => (
                                <Form>
                                    <label htmlFor="name">Name</label>
                                    <Field className="form-control" type="text" name="name"/>
                                    <label htmlFor="name">Amount</label>
                                    <Field className="form-control" type="text" name="amount"/>
                                    <button className="btn" type="submit">
                                        Send
                                    </button>
                                </Form>
                        )}
                    </Formik>
                </div>
                <div>
                    <h2>
                        All Products:
                    </h2>
                    <ShowProducts
                        products={this.state.product}
                        onNameChange={this.onNameChange}
                    />
                </div>
            </>
    );
    }
}

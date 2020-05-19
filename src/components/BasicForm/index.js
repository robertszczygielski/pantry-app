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
                <Formik
                    initialValues={{ name: "" }}
                    onSubmit={this.onSubmit}
                >
                    {() => (
                            <Form>
                                <Field className="form-control" type="text" name="name"/>
                                <button className="btn" type="submit">
                                    Send
                                </button>
                            </Form>
                    )}
                </Formik>
                <ShowProducts
                    products={this.state.product}
                    onNameChange={this.onNameChange}
                />
            </>
    );
    }
}

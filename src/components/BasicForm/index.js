import React, { Component } from 'react';
import { Field, Form, Formik } from "formik";
import { addProduct, getProducts } from "../../restapi/BeckEnd/Product";
import { ShowProducts } from "./ShowProducts";

export class BasicForm extends Component {
    state = {
        product: []
    }

    onSubmit = async value => {
        await addProduct(value);
        getProducts().then( response  => {
            this.setState({ product: response.data.name });
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
                                <Field type="text" name="name"/>
                                <button type="submit">
                                    Send
                                </button>
                            </Form>
                    )}
                </Formik>
                <ShowProducts
                    productsNames={this.state.product}
                />
            </>
    );
    }
}

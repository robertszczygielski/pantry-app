import React, { Component } from 'react';
import { Field, Form, Formik } from "formik";
import { addProduct, getProducts } from "../../restapi/BeckEnd/Product";
import { ShowProducts } from "./ShowProducts";

export class BasicForm extends Component {
    state = {
        names: []
    }

    onSubmit = value => {
        addProduct(value);
        getProducts().then(response => {
            console.log("#aaa" + response)
            this.setState({ names: response })
    }).catch();
        console.log(this.state.names);
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
                    productsNames={this.state.names}
                />
            </>
    );
    }
}

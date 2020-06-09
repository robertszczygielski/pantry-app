import React, { Component } from 'react';
import { Field, Form, Formik } from "formik";
import { addProduct, getProducts, updateProduct } from "../../restapi/BeckEnd/Product";
import { ShowProducts } from "./ShowProducts";
import { DangerMessage } from "./DangerMessage";

export class BasicForm extends Component {
    state = {
        product: null,
        nameError: '',
        amountError: ''
    }

    componentDidMount() {
        getProducts().then( (response = {})  => {
            this.setState({ product: response.productsDto });
        }).catch();
    }

    errorMapper = errorCode => {
        if (errorCode === 'PANTRY_PRODUCT_NAME_NO_SMALL_LETTER') {
            this.setState({ nameError: `error.message.${errorCode}`});
        } else if (errorCode === 'PANTRY_PRODUCT_AMOUNT_GREATER_THAN_ZERO') {
            this.setState({ amountError: `error.message.${errorCode}` });
        }
    }

    onSubmit = async value => {
        const resp = await addProduct(value);
        if (resp.status === 500) {
            this.errorMapper(resp.data.message);
        }

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
                                    {this.state.nameError && <DangerMessage message={this.state.nameError} />}
                                    <label htmlFor="name">Amount</label>
                                    <Field className="form-control" type="text" name="amount"/>
                                    {this.state.amountError && <DangerMessage message={this.state.amountError} />}
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

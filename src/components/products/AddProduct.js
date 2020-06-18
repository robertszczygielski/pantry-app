import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { DangerMessage } from "./DangerMessage";
import { CategorySelect } from "./CategorySelect";
import { addProduct, getProductsCategories } from "../../restapi/BackEnd/Product";

export const AddProduct = () => {

    const [nameError, setNameError] = useState("");
    const [amountError, setAmountError] = useState("");
    const categories = useState( () => {
        return getProductsCategories().then((response) => {
            return response;
        }).catch();
    })

    const onSubmit = async value => {
        const resp = await addProduct(value);
        if (resp.status === 500) {
            errorMapper(resp.data.message);
        }
    };

    const errorMapper = errorCode => {
        if (errorCode === 'PANTRY_PRODUCT_NAME_NO_SMALL_LETTER') {
            setNameError(`error.message.${errorCode}`);
        } else if (errorCode === 'PANTRY_PRODUCT_AMOUNT_GREATER_THAN_ZERO') {
            setAmountError(`error.message.${errorCode}` );
        }
    }

    return (
        <>
            <h2>
                Enter New Product:
            </h2>
            <Formik
                initialValues={{ name: "", amount: "", category: "" }}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field className="form-control" type="text" name="name"/>
                        { nameError && <DangerMessage message={nameError} />}

                        <label htmlFor="name">Amount</label>
                        <Field className="form-control" type="text" name="amount"/>
                        {amountError && <DangerMessage message={amountError} />}

                        <CategorySelect label="Product Category" name="category">
                            {categories && categories.map(category =>
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )}
                        </CategorySelect>

                        <button className="btn" type="submit">
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

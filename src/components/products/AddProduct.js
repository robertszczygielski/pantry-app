import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { DangerMessage } from "./DangerMessage";
import { CategorySelect } from "./CategorySelect";
import { addProduct, getProductsCategories } from "../../restapi/BackEnd/Product";

export const AddProduct = () => {

    const [nameError, setNameError] = useState("");
    const [amountError, setAmountError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [categories, setCategories] = useState([]);

    const fetchUrl = async () => {
        const data = await getProductsCategories().then(response => {
            return response
        }).catch();

        setCategories(data);
    }

    useEffect(() => {
        fetchUrl().then(r => console.dir("Categories fetch OK"));
    }, []);

    const onSubmit = async (value, {resetForm}) => {
        const resp = await addProduct(value);
        if (resp.status === 500) {
            errorMapper(resp.data.message);
        } else {
            resetForm();
            setAmountError("");
            setNameError("");
        }
    };

    const errorMapper = errorCode => {
        if (errorCode === 'PANTRY_PRODUCT_NAME_NO_SMALL_LETTER') {
            setNameError(`error.message.${errorCode}`);
        } else if (errorCode === 'PANTRY_PRODUCT_AMOUNT_GREATER_THAN_ZERO') {
            setAmountError(`error.message.${errorCode}` );
        } else if (errorCode === 'PANTRY_PRODUCT_CATEGORY_NOT_CHOSEN') {
            setCategoryError(`error.message.${errorCode}` );
        }
    }

    return (
        <>
            <h2>
                Enter New Product:
            </h2>
            <Formik
                enableReinitialize
                initialValues={{ name: "", amount: "", category: categories[0] !== undefined  ? categories[0].id : "" }}
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

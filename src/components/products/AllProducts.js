import React, { useState } from 'react';
import { getProducts, updateProduct } from "../../restapi/BackEnd/Product";
import { ShowProducts } from "./ShowProducts";

export const AllProducts = () => {

    const products = useState(() => {
        const aaa = getProducts().then( response  => {
            return response.productsDto
        }).catch();
        console.dir("@@ = " + JSON.stringify(aaa));
    })

    const onNameChange = async (id, newName) => {
        await updateProduct(id, newName);
    }

    return (
        <>
            <h2>
                All Products:
            </h2>
            <ShowProducts
                products={products}
                onNameChange={onNameChange}
            />
        </>
    )
}

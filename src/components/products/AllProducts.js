import React, { useState, useEffect } from 'react';
import {
  deleteProduct,
  getProducts,
  updateProduct
} from "../../restapi/BackEnd/Product";
import { ShowProducts } from "./ShowProducts";

export const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchUrl = async () => {
        const data = await getProducts().then(response => {
                     return response.productsDto
                 }).catch();

        setProducts(data);
    }

    useEffect(() => {
        fetchUrl().then(r => console.dir("Product fetch OK"));
    }, []);

    const onNameChange = async (id, newName) => {
        await updateProduct(id, newName);
    }

    const onDeleteProduct = async (id, name) => {
      await deleteProduct(id, name)
    }

    return (
        <>
            <h2>
                All Products:
            </h2>
            <ShowProducts
                products={products}
                onNameChange={onNameChange}
                onDeleteProduct={onDeleteProduct}
            />
        </>
    )
}

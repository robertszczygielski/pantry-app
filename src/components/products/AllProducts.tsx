import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  deleteProduct,
  getProducts,
  updateProduct
} from "../../restapi/BackEnd/Product";
import {ShowProducts} from "./ShowProducts";

interface IProduct {
  amount: number;
  id: string
  name: string;
}

export const AllProducts: React.FC = () => {

  const [products, setProducts] = useState<Array<IProduct | null> | null>([])

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response.productsDto)
    }).catch()
  })

  const onNameChange = async (id: string, newName: string) => {
    await updateProduct(id, newName);
  }

  const onDeleteProduct = async (id: string, name: string) => {
    await deleteProduct(id, name)
  }

  return (
      <div>
        <h2>
          All Products:
        </h2>
        <ShowProducts
            products={products}
            onNameChange={onNameChange}
            onDeleteProduct={onDeleteProduct}
        />
      </div>
  )
}

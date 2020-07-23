import React from 'react';
import { useEffect, useState } from 'react';
import {
  deleteProduct,
  getProducts,
  updateProduct,
} from '../../restapi/BackEnd/Product';
import { ShowProducts } from './ShowProducts';
import { IProduct } from './Product.interface';

export const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Array<IProduct | null> | null>([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch();
  });

  const onNameChange = async (id: string, newName: string) => {
    await updateProduct(id, newName);
  };

  const onDeleteProduct = async (id: string, name: string) => {
    const productToDelete: IProduct = {
      id: id,
      name: name,
      amount: 0,
      category: 'NaN',
    };
    await deleteProduct(productToDelete);
  };

  return (
    <div>
      <h2>All Products:</h2>
      <ShowProducts
        products={products}
        onChangeProductName={onNameChange}
        onDeleteProduct={onDeleteProduct}
      />
    </div>
  );
};

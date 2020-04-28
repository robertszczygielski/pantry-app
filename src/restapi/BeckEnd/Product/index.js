import React from 'react';
import API from '../index';

export const getProducts = () =>
    API.get('/products')
        .then(res => {
            return  res.data;
        });

export const addProduct = (name) =>
    API.post('/products/add', name);


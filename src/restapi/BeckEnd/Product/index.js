import React from 'react';
import API from '../index';

export const getProducts = () =>
    API.get('/product')
        .then(res => {
            return res;
        });

export const addProduct = (product) =>
    API.post('/product', product);


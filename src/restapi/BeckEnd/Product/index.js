import API from '../index';

export const getProducts = () =>
    API.get('/products')
        .then(res => {
            return res.data.productsDto;
        });

export const addProduct = (product) =>
    API.post('/products', product);


import API from '../index';

export const getProducts = () =>
    API.get('/products')
        .then(res => {
            if (res.data) {
                return res.data;
            }

        })
        .catch(err => console.log("#API Product: " + err));

export const getProductsCategories = () =>
    API.get('/products/categories')
        .then(res => {
            if (res.data) {
                return res.data;
            }

        })
        .catch(err => console.log("#Api Categories: " + err));


export const addProduct = (product) =>
    API.post('/products', product)
        .catch(err => {return err.response});

export const updateProduct = (id, newName) =>
    API.put('/products',
        {
            id : id,
            name: newName,
        })
        .then(res => console.log("#res<" + res.data))
        .catch(err => console.log("#err<" + err));


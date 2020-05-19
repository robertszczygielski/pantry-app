import API from '../index';

export const getProducts = () =>
    API.get('/products')
        .then(res => {
            if (res.data) {
                return res.data;
            }

        })
        .catch(err => console.log(err));


export const addProduct = (product) =>
    API.post('/products', product)
        .catch(err => console.log(err));

export const updateProduct = (id, newName) =>
    API.put('/products',
        {
            id : id,
            name: newName,
        })
        .then(res => console.log("#res<" + res.data))
        .catch(err => console.log("#err<" + err));


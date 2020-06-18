import API from '../index';

export const getProducts = () =>
    API.get('/products')
        .then(res => {
            if (res.data) {
                return res.data;
            }

        })
        .catch(err => {
                console.log("#API Product: " + err)
            return {"productsDto": [
                    {
                        "name": "test1",
                        "amount": "1",
                        "id": "1234"
                    }]}
            }
        );

export const getProductsCategories = () =>
    API.get('/products/categories')
        .then(res => {
            if (res.data) {
                return res.data;
            }

        })
        .catch(err => {
            console.log("#Api Categories: " + err);
            return [{"name": "test", "id":"0"}]
        });


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


import API from 'src/restapi/BackEnd/index';
import { IProduct } from '../../../components/products/Product.interface';
import { ICategory } from '../../../components/products/Category.interface';
import { IError } from '../../../components/products/Error.interface';
import { AxiosResponse } from 'axios';

export const getProducts = (): Promise<Array<IProduct | null> | null> =>
  API.get('/products')
    .then((res) => {
      if (res.data) {
        return res.data.productsDto;
      }
    })
    .catch(() => {
      return [
        {
          name: 'test1',
          amount: 1,
          id: '1234',
          category: 'test',
        },
      ];
    });

export const getProductsCategories = (): Promise<Array<ICategory | null> | null> =>
  API.get('/products/categories')
    .then((res) => {
      if (res.data) {
        return res.data;
      }
    })
    .catch(() => {
      return [{ name: 'test', id: '0' }];
    });

export const addProduct = (
  product: IProduct
): Promise<AxiosResponse | IError | null | void> =>
  API.post('/products', product).catch((err) => {
    return err.data;
  });

export const updateProduct = (id: string, newName: string): Promise<void> =>
  API.put('/products', {
    id: id,
    name: newName,
  }).then();

export const deleteProduct = (productToDelete: IProduct): Promise<void> =>
  API.delete('/products', { data: productToDelete }).then();

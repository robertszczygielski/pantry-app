import React from 'react';
import { useState, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { DangerMessage } from './DangerMessage';
import { CategorySelect } from './CategorySelect';
import {
  addProduct,
  getProductsCategories,
} from '../../restapi/BackEnd/Product';
import { IProduct } from './Product.interface';
import { ICategory } from './Category.interface';

interface IValidationError {
  errorType: ErrorType;
  errorCode: string;
}

enum ErrorType {
  NO_ERROR,
  PANTRY_PRODUCT_NAME_NO_SMALL_LETTER,
  PANTRY_PRODUCT_AMOUNT_GREATER_THAN_ZERO,
}

export const AddProduct: React.FC = () => {
  const initialValues: IProduct = { name: '', amount: 0, category: '' };
  const [categories, setCategories] = useState<Array<ICategory | null> | null>(
    []
  );
  const [validationError, setValidationError] = useState<IValidationError>({
    errorCode: '',
    errorType: ErrorType.NO_ERROR,
  });

  useEffect(() => {
    getProductsCategories()
      .then((response) => setCategories(response))
      .catch();
  }, []);

  const onSubmit = async (value: IProduct) => {
    const resp = await addProduct(value);
    if (resp && resp.data.code === 500) {
      errorMapper(resp.data.message);
    }
  };

  const errorMapper = (errorCode: string) => {
    setValidationError({
      errorCode: `error.message.${errorCode}`,
      errorType: ErrorType[errorCode as keyof typeof ErrorType],
    });
  };

  return (
    <div>
      <h2>Enter New Product:</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field className="form-control" type="text" name="name" />
            {validationError.errorType ===
              ErrorType.PANTRY_PRODUCT_NAME_NO_SMALL_LETTER && (
              <DangerMessage message={validationError.errorCode} />
            )}

            <label htmlFor="name">Amount</label>
            <Field className="form-control" type="text" name="amount" />
            {validationError.errorType ===
              ErrorType.PANTRY_PRODUCT_AMOUNT_GREATER_THAN_ZERO && (
              <DangerMessage message={validationError.errorCode} />
            )}

            <CategorySelect label="Product Category" name="category">
              {categories &&
                categories.map(
                  (category) =>
                    category && (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    )
                )}
            </CategorySelect>

            <button className="btn" type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

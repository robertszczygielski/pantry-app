import React, { useState } from 'react';
import { TiDelete, TiEdit } from 'react-icons/all';
import Modal from 'react-modal';
import { IProduct } from './Product.interface';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface IProducts {
  products: (IProduct | null)[] | null;
  onDeleteProduct: (id: string, name: string) => void;
  onChangeProductName: (id: string, name: string) => void;
}

export const ShowProducts: React.FC<IProducts> = ({
  products,
  onDeleteProduct,
  onChangeProductName,
}) => {
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productNewName, setProductNewName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (name: string, id?: string) => {
    setProductId(id ? id : '');
    setProductName(name);
    setShow(true);
  };

  const onNameChange = (v: React.ChangeEvent<HTMLInputElement>) => {
    setProductNewName(v.target.value);
  };

  const onDelete = (name: string, id?: string) => {
    onDeleteProduct(id ? id : '', name);
  };

  const handleChange = () => {
    onChangeProductName(productId, productNewName);
  };

  return (
    <div>
      {products &&
        products.map(
          (item) =>
            item && (
              <div className="container" key={item.id}>
                <div className="row align-items-center">
                  <div className="col-sm">{item.name}</div>
                  <div className="col-sm">{item.amount}</div>
                  <div className="col-sm">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleShow(item.name, item.id)}
                    >
                      <TiEdit />
                    </button>
                  </div>
                  <div className="col-sm">
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(item.name, item.id)}
                    >
                      <TiDelete />
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="UpdateModal"
      >
        <h2>Change name {productName} to:</h2>
        <form>
          <input onChange={onNameChange} />
          <button className="btn btn-primary" onClick={handleChange}>
            Update
          </button>
          <button className="btn btn-danger" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

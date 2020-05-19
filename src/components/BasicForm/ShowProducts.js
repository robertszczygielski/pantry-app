import React, { useState } from 'react';
import { TiEdit } from "react-icons/all";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export const ShowProducts = (props) => {
    const [show, setShow] = useState(false);
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productNewName, setProductNewName] = useState("");

    const { products } = props;

    const handleClose = () => setShow(false);
    const handleShow = (id, name) => {
        setProductId(id);
        setProductName(name);
        setShow(true);
    };

    const onNameChange = (v) => {
        setProductNewName(v.target.value)
    }

    const handleChange = () => {
        props.onNameChange(productId, productNewName);
    }

    return (
        <>
            {products && products.map((item) =>
                <div className="container" key={item.id}>
                    <div className="row align-items-center">
                        <div className="col-sm">
                            {item.name}
                        </div>
                        <div className="col-sm">
                            {item.amount}
                        </div>
                        <div className="col-sm">
                            <button className="btn btn-primary" onClick={() => handleShow(item.id, item.name)}>
                                <TiEdit/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel="UpdateModal"
            >

                <h2>Change name {productName} to:</h2>
                <form>
                    <input onChange={onNameChange}/>
                    <button className="btn btn-primary" onClick={handleChange}>Update</button>
                    <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
                </form>
            </Modal>
        </>
    );
}

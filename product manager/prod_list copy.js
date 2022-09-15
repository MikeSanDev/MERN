import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.product.map((product, idx) =>
                <p key={{ idx }}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <br />
                    <Link to={`/products/${product._id}/edit`}>
                        Edit
                    </Link>
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
            )
            }
        </div >
    )
}

export default ProductList;
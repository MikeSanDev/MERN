import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState(null);
    const { removeFromDom } = props;
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.error(err));
    });
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
    if (product === null) {
        return <h3>Product does not exist.</h3>
    }

    const { title, price, description } = product
    return (
        <div>
            <p><strong>Products for sale!</strong></p>
            <p>Title: {title}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <Link to={`/products/${id}/edit`}>
                Edit
            </Link>
            {/* WILL DELETE AND REROOUTE BUT DOES NOT GO AWAY - link is still there and when clicked links to error page*/}
            <Link to={'/'}>
                <button onClick={(e) => { deleteProduct(product._id) }}>
                    Delete
                </button>
            </Link>
        </div>
        // needs a link back to the main page
    )
}

export default Detail;
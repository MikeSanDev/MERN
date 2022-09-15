import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/prod_form'
import ProductList from '../components/prod_list'

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }


    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;
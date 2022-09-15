import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [price, setPrice] = useState("");
    const [priceErr, setPriceErr] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionErr, setDescriptionErr] = useState("");
    const navigate = useNavigate();

    // will not refresh page when form is created


    const createProduct = (e) => {
        // if you want page to refresh after submiting - remove e.preventDefault()
        // e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => {
                console.log("Response:", res)
                navigate('/')
            })

            .catch(err => console.log("Error. ", err))
    };
    const validTitle = (e) => {
        setTitle(e.target.value)
        if (e.target.value.length <= 0) {
            setTitleErr("The title must be at least 1 characters");
        } else {
            setTitleErr("");
        }
    }
    const validPrice = (e) => {
        setPrice(e.target.value)
        if (e.target.value.length <= 0) {
            setPriceErr("The price must be at least 1 characters");
        } else {
            setPriceErr("");
        }
    }
    const validDescription = (e) => {
        setDescription(e.target.value)
        if (e.target.value.length <= 0) {
            setDescriptionErr("The description must be at least 2 characters");
        } else {
            setDescriptionErr("");
        }
    }


    return (
        <div>
            <form onSubmit={createProduct}>
                <div>
                    <label>Title </label>
                    <input type="text" onChange={validTitle} />
                    {
                        titleErr ?
                            <p style={{ color: 'red' }}>{titleErr}</p> : ''

                    }
                </div>
                <div>
                    <label>Price </label>
                    <input type="text" onChange={validPrice} />
                    {
                        priceErr ?
                            <p style={{ color: 'red' }}>{priceErr}</p> : ''

                    }

                </div>
                <div>
                    <label>Description </label>
                    <input type="text" onChange={validDescription} />
                    {
                        descriptionErr ?
                            <p style={{ color: 'red' }}>{descriptionErr}</p> : ''

                    }
                </div>

                <input type="submit" value="Create Product" />
            </form>

        </div>
    );

};


export default ProductForm;

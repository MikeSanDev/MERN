import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");
    const navigate = useNavigate();


    // make sure to use the GET route and not the PUT route for useEffect
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res)
                setName(res.data.name);

            })
    }, [id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            name
        })
            .then(res => {
                console.log("Response:", res)
                navigate('/')
            })

            .catch(err => console.log("Error. ", err))
    };
    const validName = (e) => {
        setName(e.target.value)
        if (e.target.value.length <= 3) {
            setNameErr("The name must be at least 3 characters");
        } else {
            setNameErr("");
        }
    }

    return (
        <div>
            <form onSubmit={updateAuthor}>
                <div>
                    <label>Name </label>
                    <input type="text" value={name} onChange={validName} />
                    {
                        nameErr ?
                            <p style={{ color: 'red' }}>{nameErr}</p> : ''

                    }
                </div>
                <input type="submit" value="Update name" />
                <Link to={"/"}>
                    <button>Cancel</button>
                </Link>
            </form>

        </div>
    );

};


export default Update;

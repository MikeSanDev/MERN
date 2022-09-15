import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");
    const navigate = useNavigate();

    const createAuthor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', {
            name
        })
            .then(res => {
                console.log("Response:", res)
                navigate('/')
            })

            .catch(error => {
                console.log(error.response?.data)
                setNameErr(error.response?.data?.message);
            })
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
            <form onSubmit={createAuthor}>
                <div>
                    <label>Name </label>
                    <input type="text" value={name} onChange={validName} />
                    {
                        nameErr ?
                            <p style={{ color: 'red' }}>{nameErr}</p> : ''

                    }
                </div>
                <input type="submit" value="Add Author" />
                <Link to={"/"}>
                    <button>Cancel</button>
                </Link>
            </form>

        </div>
    );

};


export default AuthorForm;

import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {
    const { removeFromDom } = props;

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div >
            <h1>Favorite Authors</h1>
            <Link to={'/new'}>Add An Author</Link>
            <p>We have quotes by:</p>
            <table style={{ border: "3px solid rgb(0, 0, 0)", Display: "flex", marginLeft: "auto", marginRight: "auto" }} >
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Available Actions</th>
                    </tr>

                </thead>

                {props.author.map((author, idx) =>
                    <tr key={{ idx }}>
                        <td>{author.name}</td>


                        <td><Link to={`/authors/${author._id}/edit`}>
                            Edit
                        </Link>
                            <button onClick={(e) => { deleteAuthor(author._id) }}>
                                Delete
                            </button>
                        </td>

                    </tr>
                )
                }
            </table>
        </div >
    )
}

export default AuthorList;

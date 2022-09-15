import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AuthorList from '../components/author_list'

const Main = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }


    return (
        <div>
            {loaded && <AuthorList author={author} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;

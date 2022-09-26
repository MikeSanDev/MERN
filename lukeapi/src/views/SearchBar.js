import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function SearchBar() {
    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });
    const navigate = useNavigate();

    function onChangeHandler(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    function onSubmitHandler(event) {
        event.preventDefault();

        navigate("/" + formState.option + "/" + formState.id)
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <label>Search for:</label>
            <select name="option" value={formState.option} onChange={onChangeHandler}>
                <option value="people">People</option>
                <option value="planet">Planet</option>
            </select>
            <label>ID:</label>
            <input name="id" value={formState.id} onChange={onChangeHandler} />
            <button>Search</button>
        </form>
    );

}

export default SearchBar;
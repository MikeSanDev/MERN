import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Planet() {
    const { id } = useParams()
    const [planet, setPlanet] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log()
                setPlanet(response.data)
            })
            .catch(console.log)
    }, [id])

    return (
        <div>
            <h2>Name: {planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrian: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planet
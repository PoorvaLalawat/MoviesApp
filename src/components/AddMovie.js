import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }])
    }
    return (
        <form onSubmit={addMovie}>
            <div>
            <input className="name" id="input1" type="text" placeholder="Name of the movie" name="name" value={name} onChange={updateName} /> <br/>
            <input id="input2" type="number" placeholder="Price" name="price" value={price} onChange={updatePrice} />
            </div>
            <div>
                <button className="btn" id="btn1"> Submit </button>
            </div>
        </form>
    )
}

export default AddMovie;

import React, {useContext} from "react";
import {MovieContext} from "./MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className="nav" id="n1"> 
            <h1> Movies</h1>
            <h3> List of Movies: {movies.length}</h3>

        </div>
    );

}

export default Nav;

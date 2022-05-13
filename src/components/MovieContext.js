import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider =(props) =>
{
    const [movies, setMovies]= useState ([
        // {
        //     name: 'Harry Potter',
        //     price: '$10',
        //     id:23124
        // },
    
        // {
        //     name: 'D3',
        //     price: '$40',
        //     id:23128
    
        // },
        // {
        //     name: 'Harry Potter 7',
        //     price: '$10',
        //     id:23129
        // }
    ]);
    return  (
        <MovieContext.Provider value ={[movies,setMovies]}>
            {props.children}

        </MovieContext.Provider>
    );
};

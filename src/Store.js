import { createContext, useContext } from "react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export let movieContext = createContext(0);


export default function MoviesContextProvider(props) {
    let [trendingMovies, setTrendingMovies] = useState([]);
    let [trendingTvs, setTrendingTvs] = useState([])
    let [trendingPeople, setTrendingPeople] = useState([])
    
    async function getTrending(mediaType, callBack) {

        let response = await axios.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=b5016f6024987d846448b401b25e32fd&language=en-US&page=1`)
        let { data } = response;
        callBack(data.results.slice(0, 10));
    }

    useEffect(() => {
        getTrending('movie', setTrendingMovies);
        getTrending('tv', setTrendingTvs);
        getTrending('person', setTrendingPeople);


    }, [])

    return <movieContext.Provider value={{trendingMovies, trendingPeople, trendingTvs,setTrendingMovies}}>
        {props.children}
    </movieContext.Provider>
}
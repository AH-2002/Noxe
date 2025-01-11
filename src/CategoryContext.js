import { createContext, useContext } from "react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export let CatContext = createContext(0);

export default function CategoryContextProvider(props) {
    let [trendingMovies, setTrendingMovies] = useState([]);
    let [trendingTvs, setTrendingTvs] = useState([])
    let [trendingPeople, setTrendingPeople] = useState([])
    let nums = new Array(13).fill(1).map((elem, indx) => indx + 1);
    async function getTrending(pageNum, mediaType, callback) {

        let response = await axios.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=b5016f6024987d846448b401b25e32fd&language=en-US&page=${pageNum}`)
        let { data } = response;
        callback(data.results);

    }

    useEffect(() => {
        getTrending(1, 'movie', setTrendingMovies);
        getTrending(1, 'tv', setTrendingTvs);
        getTrending(1, 'person', setTrendingPeople);
    }, [])

    return <CatContext.Provider value={{ trendingMovies, trendingPeople, trendingTvs, nums, getTrending, setTrendingMovies,setTrendingTvs,setTrendingPeople }}>
        {props.children}
    </CatContext.Provider>
}
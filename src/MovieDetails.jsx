import axios from 'axios';
import { func } from 'joi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {

    let params = useParams();
    let [movieDetails, setMovieDetails] = useState(null);
    async function getMovieDeatails(id) {
        let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b5016f6024987d846448b401b25e32fd&language=en-US&page=1`)
        let { data } = response;
        setMovieDetails(data)
    }
    useEffect(() => {
        getMovieDeatails(params.id);
    }, [])
    return (
        <div>
            {movieDetails ? <div className="row">
                <div className="col-md-3">
                    <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path} alt="" />
                </div>
                <div className="col-md-9">
                    <h2>{movieDetails.title}</h2>
                    <p className='par py-3'>{movieDetails.overview}</p>
                    <ul>
                       
                        <li>Budget : {movieDetails.budget}</li>
                        <li>vote Rate : {movieDetails.vote_average}</li>
                        <li>Popularity : {movieDetails.popularity}</li>
                        <li>Vote Count : {movieDetails.vote_count}</li>
      
                    </ul>
                </div>
            </div> : <div className='vh-100 d-flex align-items-center justify-content-center'>
                <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

        </div>
    )
}

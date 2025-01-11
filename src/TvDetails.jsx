import axios from 'axios';
import { func } from 'joi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TvDetails() {

    let params = useParams();
    let [tvDetails, setTvDetails] = useState(null);
    async function getTVDeatails(id) {
        let response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=b5016f6024987d846448b401b25e32fd&language=en-US&page=1`)
        let { data } = response;
        setTvDetails(data)
    }
    useEffect(() => {
        getTVDeatails(params.id);
    }, [])
    return (
        <div>
            {tvDetails ? <div className="row">
                <div className="col-md-3">
                    <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + tvDetails.poster_path} alt="" />
                </div>
                <div className="col-md-9">
                    <h2>{tvDetails.name}</h2>
                    <p className='par py-3'>{tvDetails.overview}</p>
                    <ul>

                        <li>Status : {tvDetails.status}</li>
                        <li> Country : {tvDetails.production_countries[0].name}</li>
                        <li>Popularity : {tvDetails.popularity}</li>
                        <li>Number of episodes : {tvDetails.number_of_episodes}</li>
                        <li>Seasons : {tvDetails.number_of_seasons}</li>


                    </ul>
                </div>
            </div> : <div className='vh-100 d-flex align-items-center justify-content-center'>
                <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

        </div>
    )
}

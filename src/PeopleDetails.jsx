import axios from 'axios';
import { func } from 'joi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PeopleDetails() {

    let params = useParams();
    let [peopleDetails, setPeopleDetails] = useState(null);
    async function getPeopleDeatails(id) {
        let response = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=b5016f6024987d846448b401b25e32fd&language=en-US&page=1`)
        let { data } = response;
        setPeopleDetails(data)
    }
    useEffect(() => {
        getPeopleDeatails(params.id);
    }, [])
    return (
        <div>
            {peopleDetails ? <div className="row">
                <div className="col-md-3">
                    <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + peopleDetails.profile_path} alt="" />
                </div>
                <div className="col-md-9">
                    <ul>
                        <li>Name : {peopleDetails.name}</li>
                        <li>Place of birth : {peopleDetails.place_of_birth}</li>
                        <li>Popularity : {peopleDetails.popularity}</li>
                        <li className='mt-3'>Biography : {peopleDetails.biography}</li>

                    </ul>
                </div>
            </div> : <div className='vh-100 d-flex align-items-center justify-content-center'>
                <i className='fas fa-spinner fa-spin fa-3x'></i></div>}

        </div>
    )
}

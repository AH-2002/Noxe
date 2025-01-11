import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CatContext } from './CategoryContext';

export default function Movies() {

  let { nums, trendingMovies, getTrending,setTrendingMovies } = useContext(CatContext)
  return (
    <div>
      {trendingMovies ? <div className="row p-5">
        {trendingMovies.map((movie, i) => <div key={i} className='col-md-2'>
          <div className='movie mb-4 text-center'>
            <Link to={`/moviedetails/${movie.id}`} className='text-decoration-none text-light'>
              <img className='w-100 rounded' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" />
              <h3 className='h6 p-2'>{movie.title}</h3>
            </Link>
          </div>
        </div>
        )}
      </div> : <div className='vh-100 d-flex align-items-center justify-content-center'>
        <i className='fas fa-spinner fa-spin fa-3x'></i></div>
      }
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            nums.map((pageNum) => < li onClick={() => getTrending(pageNum, 'movie', setTrendingMovies)} key={pageNum} className="page-item"><a className="page-link">{pageNum}</a></li>)
          }
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div >
  )
}

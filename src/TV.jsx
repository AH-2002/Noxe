import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CatContext } from './CategoryContext';

export default function TV() {

  let { nums, trendingTvs, getTrending, setTrendingTvs } = useContext(CatContext)
  return (
    <div>
      {trendingTvs ? <div className="row p-5">
        {trendingTvs.map((tv, i) => <div key={i} className='col-md-2'>
          <div className='tv mb-4 text-center'>
            <Link to={`/tvdetails/${tv.id}`} className='text-decoration-none text-light'>
              <img className='w-100 rounded' src={'https://image.tmdb.org/t/p/w500' + tv.poster_path} alt="" />
              <h3 className='h6 p-2'>{tv.name}</h3>
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
            nums.map((pageNum) => < li onClick={() => getTrending(pageNum,'tv',setTrendingTvs)} key={pageNum} className="page-item"><a className="page-link">{pageNum}</a></li>)
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

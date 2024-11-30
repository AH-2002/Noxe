import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { movieContext } from './Store';

export default function Home() {
  let { trendingMovies, trendingPeople, trendingTvs } = useContext(movieContext)


  return (
    <>
      <div className="row p-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-4"></div>
            <h3>Trending <br /> Movies <br /> To Watch Right Now</h3>
            <p className='par'>Top Trending Movies by day</p>
            <div className="brdr mt-4"></div>
          </div>
        </div>
        {trendingMovies.map((movie, i) => <div key={i} className='col-md-2'>
          <div className='movie mb-4 text-center'>
            <Link to={`/moviedetails/${movie.id}`} className='text-decoration-none text-light'>
              <img className='w-100 rounded' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" />
              <h3 className='h6 p-2'>{movie.title}</h3>
            </Link>
          </div>
        </div>
        )}
      </div>

      <div className="row p-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-4"></div>
            <h3>Trending <br /> TVs <br /> To Watch Right Now</h3>
            <p className='par'>Top Trending TVs by day</p>
            <div className="brdr mt-4"></div>
          </div>
        </div>
        {trendingTvs.map((tv, i) => <div key={i} className='col-md-2'>
          <div className='tv mb-4 text-center'>
            <img className='w-100 rounded' src={'https://image.tmdb.org/t/p/w500' + tv.poster_path} alt="" />
            <h3 className='h6 p-2'>{tv.name}</h3>
          </div>
        </div>
        )}
      </div>

      <div className="row p-5">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className="brdr w-25 mb-4"></div>
            <h3>Trending <br /> Cinematic Figures <br /> To follow Now</h3>
            <p className='par'>Top Trending Cinematic Figures these days</p>
            <div className="brdr mt-4"></div>
          </div>
        </div>
        {trendingPeople.map((preson, i) => <div key={i} className='col-md-2'>
          <div className='person mb-4 text-center'>
            <img className='w-100 rounded' src={'https://image.tmdb.org/t/p/w500' + preson.profile_path} alt="" />
            <h3 className='h6 p-2'>{preson.name}</h3>
          </div>
        </div>
        )}
      </div>
    </>

  )
}

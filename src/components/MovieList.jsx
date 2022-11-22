import React from 'react';
import { gql, useQuery } from "@apollo/client";

export const GET_MOVIE = gql`
query getMovie {
  getMovie{
  	_id
    original_language
    title
    overview
    poster_path
    release_date
    vote_average
    vote_count
  }
}
`


const MovieList = () => {
  const { error, data } = useQuery(GET_MOVIE)

  if (error) return <h1>Error: {{ error }}</h1>;
	if (data) {
		console.log(data);
	}

  return (
    <div className="row">
      <div className="col-md-4 flex-nowrap ">
        {data &&
          data.getMovie.map(({ _id, original_language, title, overview, poster_path, release_date, vote_average, vote_count }) =>
            <div className='card' data-id={_id} state={{ _id: _id, original_language: original_language, title: title, overview: overview, poster_path: poster_path, release_date: release_date, vote_average: vote_average, vote_count: vote_count }}
            >
              <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={poster_path} alt="Movie" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Title: <span>{title}</span></h2>
                  <p>Release Date: <span>{release_date}</span></p>
                  <p>Overview Movie: <span>{overview}</span></p>
                  <p>Original Language: <span>{original_language}</span></p>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary m-1">Update</button>
                    <button className="btn btn-primary m-1">Delete</button>
                  </div>
                </div>
              </div>

            </div>
          )}
      </div>
    </div>
  )
}

export default MovieList


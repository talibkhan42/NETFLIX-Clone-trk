import React, { useEffect, useState } from 'react';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseURL = "http://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            //console.log(request);
        }
        fetchData();
    }, [fetchUrl])
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        },
    }
    const handleClick = (movie) => {
        console.log(movie)
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.title || movie?.name || "")
            .then(url=>{
                console.log("url:"+url)
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));

            }).catch(err=>{
                console.error(err);
            })
        }
    }
   
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie)=>{
                    return (
                        <>
                            <img
                                key={movie.id}
                            onClick={()=>handleClick(movie)}
                                src={`${baseURL}${(isLargeRow) ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name} 
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            />

                        </>
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
export default Row;
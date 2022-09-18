import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Style/Banner.css'
export default function Banner(){
    const [movie, setMovies] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            const res= await axios.get(requests.fetchNetflixOriginals);
            console.log(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
            setMovies(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
            
        }
        fetchData()
    }, [])
    console.log("movie"+movie.name);
    
    return(
        <header className='banner'
            style={{
                backgroundSize:"cover", 
                backgroundImage:`url(
                    "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition:"center center"
            }}
        >
            <div className='banner-container'>
                <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_discription'>{movie?.overview}</h1>
            </div>
            <div className='banner_fadebutton'></div>
            
        </header>
    )
}
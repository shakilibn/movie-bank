import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=870967436c1517d581daf3b245495790&language=en-US`;

        fetch(url)
        .then(res => res.json())
        .then(data => setMovie(data))
    },[])
    console.log(movie);
    const {title} = movie;
    return (
        <div>
            <h4>{title}</h4>
        </div>
    );
};

export default MovieDetails;
import React from "react";
import { Link } from "react-router-dom";

const PeliculaCard = ({ pelicula }) => {
    return(
        <div className="movie">
            <div>
                <p>{pelicula.anio}</p>
            </div>
            
            <div>
            <Link to={`detalles/${pelicula.id}`}>
                <img src={pelicula.poster !== 'N/A' ? pelicula.poster :'https://via.plaveholder.com/400'} alt={pelicula.titulo}/>
            </Link>
            </div>

            <div>
                <span>PELÍCULA</span>
                <h3>{pelicula.titulo}</h3>
            </div>

        </div>
    )
};

export default PeliculaCard;


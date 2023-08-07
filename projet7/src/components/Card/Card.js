import React from 'react';
import { Link } from "react-router-dom"
import "./_card.scss"

function Card({ id, cover, title }) {
    return (
        <article>
            <Link 
            to={`/hebergement/${id}`}
            aria-label={`Voir les détails de ${title}`}>

                <img src={cover} alt={title} title={title} className='cardImg' />
                <h3>{title}</h3>
            </Link>
        </article>
    )
}

export default Card;
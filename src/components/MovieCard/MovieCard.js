import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';


const MovieCard = ({movie : {image, name, date, rating}}) => {
    return(
        <div className="cards">
            <div className="card">
            <div className="overflow">
                <img src={image} alt="poster" className="card-img-top"/>
            </div>
            <div>
                <h1>{name}</h1>
                <div>
                    <h3>{date}</h3>
                </div>
                <div>
                    
                    <Rate rating={rating}/>
                </div>
                <div>
                    <Link to={{ pathname:'/details'}}>
                        <Button className="btn">Description</Button>
                    </Link>
                </div>
            </div>
        </div>
        </div>    
    )
};
export default MovieCard;
import React from 'react';
import Rate from './Rate'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Details = ({movie : {image, name, date, rating, description, trailer}}) => {
    
    return (
        <div>
            <div >
            <div >
                <img src={image} alt="poster" />
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
                    <h3>{description}</h3>
                </div>
                <div>
                <iframe width="420" height="345" src={trailer}>
                </iframe>
                </div>
                <div>
                    <Link to={{ pathname:'/'}}>
                        <Button className="btn">Back to Movies list</Button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Details

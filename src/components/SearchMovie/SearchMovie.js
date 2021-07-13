import React from "react";
import Rate from "../Rate";
import "./SearchMovie.css";

const SearchMovie = ({ setSearchByName, setSearchByRate, searchByRate }) => {
    return (
        <div>
            <div>
                <input type="text" placeholder="Type movie to search" onChange={(e) => setSearchByName(e.target.value)} />
                
                <Rate setSearchByRate={setSearchByRate} rating={searchByRate} />
            </div>
        </div>
    );
};

export default SearchMovie;
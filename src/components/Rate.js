import React from "react";

const Rate = ({ rating, setSearchByRate }) => {
    const stars = (x) => {
        let starsArray = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= x) {
                starsArray.push(<span style={{ color : 'orange', width:'25 px', height: '60 px' }} onClick={() => setSearchByRate(i)}>★</span>);
            } else {
                starsArray.push(<span onClick={() => setSearchByRate(i)}>☆</span>);
            }
        }
        return starsArray;
    };

    return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
    setSearchByRate: () => {},
};

export default Rate;
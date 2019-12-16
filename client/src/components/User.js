import React from 'react';

const User = ({name, country, search}) => {
    return(
        <div data-testid = 'user'>
            <h2>{name}</h2>
            <h3>{country}</h3>
            <h3>Search Numbers : {search}</h3>
        </div>
    )
}

export default User
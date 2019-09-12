import React from 'react';

function Image (props) {
    const {imageUrl} = props;
    return(
        <img src ={imageUrl} alt="NASA IMAGE FILE"></img>
    );
}

export default Image;
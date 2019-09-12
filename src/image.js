import React from 'react';

function Image (props) {
    const {imageUrl} = props;
    return(
        <div>
            <img src ={imageUrl} alt="NASA IMAGE FILE"></img>
        </div>
        
    );
}

export default Image;
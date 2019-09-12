import React from "react";
import styled from 'styled-components';

const StyledImageDiv = styled.div`
    padding: 10px;
    img {
        width: 80%;
        height: 500px;
    }
`

function Image (props) {
    const {imageUrl} = props;
    return(
        <StyledImageDiv>
            <img src ={imageUrl} alt="NASA IMAGE FILE"></img>
        </StyledImageDiv>
        
    );
}

export default Image;
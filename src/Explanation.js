import React from "react";
import styled from "styled-components";

const StyledDivTag = styled.p`
    width: 80%;
    margin: 5px auto;
    text-align: left;


`

function Explanation(props) {
    const { apodShortExplanation } = props;

    return (
        <StyledDivTag><p>{apodShortExplanation}</p></StyledDivTag>
    
    )
}

export default Explanation;
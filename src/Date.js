import React from "react";
import styled from 'styled-components';

const StyledPTag = styled.p`
    font-size: 3rem;
`;

const StyledDivTag = styled.div`
    margin: 10px auto; 
    width: 80%;
    margin: 0 auto;
`

function Date(props) {
    const { dateValue } = props;
    return(
        <StyledDivTag>
            {/* <input style={dateStyles.input} type="date" value={dateValue}/> */}
            <StyledPTag>{dateValue}</StyledPTag>
            
        </StyledDivTag>        
    )
}

export default Date; 
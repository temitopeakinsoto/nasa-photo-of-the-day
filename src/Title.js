import React from "react";
import styled from 'styled-components';

const StyledTitleDivTag = styled.div`
    font-size: 4rem;
`;

function Title(props) {
    const {titleValue} = props;
    return (
        <StyledTitleDivTag>
            {titleValue};
        </StyledTitleDivTag>
    );
}

export default Title;
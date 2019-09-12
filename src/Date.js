import React from "react";

function Date(props) {
    const { dateValue } = props;
    return(
        <input type="date" value={dateValue}/>
    )
}

export default Date;
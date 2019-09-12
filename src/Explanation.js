import React from "react";

function Explanation(props) {
    const { apodShortExplanation } = props;

    return (
    <p>{apodShortExplanation}</p>
    )
}

export default Explanation;
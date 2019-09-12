import React from "react";

function Title(props) {
    const {titleValue} = props;
    return (
        <div>
            {titleValue};
        </div>
    );
}

export default Title;
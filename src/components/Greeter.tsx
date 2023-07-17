import React from "react";

interface GreeterProps {
    person: string;
}

function Greeter(props: GreeterProps): JSX.Element {
    return <h1>hello, {props.person}</h1>
}

export default Greeter
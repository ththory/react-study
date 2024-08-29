const { useState } = require("react");

export default function Counter() {
    const [number, setNumber] = useState(0);

    function handleOnClick() {
        setNumber((number) => number + 1);
        setNumber((number) => number + 1);
        setNumber((number) => number + 1);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handleOnClick}>+3</button>{" "}
        </>
    );
}

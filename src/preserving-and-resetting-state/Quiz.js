import { useState } from "react";

export default function Quiz() {
    const [showHint, setShowHint] = useState(false);

    return (
        <div>
            {showHint && (
                <p>
                    <i>Hint: Your favorite city?</i>
                </p>
            )}
            <Form />
            <button
                onClick={() => {
                    setShowHint(!showHint);
                }}
            >
                {showHint ? "Hide Hint" : "Show Hint"}
            </button>
        </div>
    );
}

function Form() {
    const [text, setText] = useState("");
    return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}

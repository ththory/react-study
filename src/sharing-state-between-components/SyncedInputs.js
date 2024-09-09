import { useState } from "react";

export default function SyncedInputs() {
    const [message, setMessage] = useState("");
    return (
        <>
            <Input
                label="First input"
                txt={message}
                handleChange={(e) => {
                    setMessage(e.target.value);
                }}
            />
            <Input
                label="Second input"
                txt={message}
                handleChange={(e) => {
                    setMessage(e.target.value);
                }}
            />
        </>
    );
}

function Input({ txt, label, handleChange }) {
    return (
        <label>
            {label} <input value={txt} onChange={handleChange} />
        </label>
    );
}

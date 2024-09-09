import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
    const [query, setQuery] = useState("");
    return (
        <>
            <SearchBar
                value={query}
                handleChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
            <hr />
            <List items={foods} query={query} />
        </>
    );
}

function SearchBar({ value, handleChange }) {
    return (
        <label>
            Search: <input value={value} onChange={handleChange} />
        </label>
    );
}

function List({ items, query }) {
    return (
        <table>
            {filterItems(items, query).map((food) => (
                <tr key={food.id}>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                </tr>
            ))}
        </table>
    );
}

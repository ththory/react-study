// function Item({ name, isPacked }) {
//     if (isPacked === true) return <li className="item">{name} ✔</li>;
//     else return <li className="item">{name}</li>;
// }

// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {name} {true}
//         </li>
//     );
// }

// Question 2
function Item({ name, importance }) {
    return (
        <li className="item">
            {name}{" "}
            {importance !== 0 && (
                <i>
                    (Importance:
                    {importance})
                </i>
            )}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <Item name="Battery" isPacked={true} importance={9}></Item>
            <Item name="Note" isPacked={false} importance={0}></Item>
            <Item name="Backpack" isPacked={true} importance={4}></Item>
        </section>
    );
}

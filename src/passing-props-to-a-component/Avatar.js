export default function Avatar({ person, size }) {
    console.log(person, size);
    return (
        <>
            <img
                src={"https://i.imgur.com/" + person.imageId + "s.jpg"}
                alt={person.name}
                width={size}
                height={size}
            />
        </>
    );
}

export default function Rendering(){
    const animals = ["Tiger", "Cow", "Monkey", "Gorilla", "Wolf"];

    return (
        <div>
            <h1>Animals: </h1>
            <ul>
                {animals.map((animal)=>{
                    return <li key={animal}>{animal}</li>;
                })}
            </ul>
        </div>
    );
}
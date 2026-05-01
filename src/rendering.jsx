import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  let chemists = people.filter((person) => person.profession === "chemist");
  let everyoneElse = people.filter(
    (person) => person.profession !== "chemist",
  );

  chemists = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  everyoneElse = everyoneElse.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemists}</ul>
      <h1>Everyone Else</h1>
      <ul>{everyoneElse}</ul>
    </article>
  );
}

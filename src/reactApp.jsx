import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    setPerson((prev)=>({ ...prev, age: prev.age + 1 }));
    setPerson((prev)=>({ ...prev, age: prev.age + 1 }));
  };


  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

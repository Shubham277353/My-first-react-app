const person = {
    name : "Bing Chilling",
    description : "Hii its me Bing Chilling",
    avatar : "https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
}


export default function Avatar() {

  return (
    <>
      <h1>{person.name}'s todo's app </h1>
      <img src={person.avatar} alt={person.description} />
      <h2>{person.description}</h2>
    </>
  );
}

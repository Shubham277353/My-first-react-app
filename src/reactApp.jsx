import { useState } from "react";

export default function ReactWebpage({title,phoneNo}) {
    const [counter,setCounter] = useState(0);
    const [colour , setColour] = useState("black");

    
    const addition = () => {
        setCounter(counter + 1);
        changeColour();
    }
    
    const subtract = () =>{
        setCounter(counter -1);
        changeColour();
    }

    const changeColour = () => {
        if(counter % 2 == 0){
            setColour("red");
        }else{
            setColour("blue");
        }
    }

  return (
    <div style={{backgroundColor: colour}}>
      <nav>
        <h1>{title}</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <h2>Welcome to my website</h2>
        <p>This is my first react webpage</p>
        <button onClick={subtract}>Subtract</button>
        <h2>{counter}</h2>
        <button onClick={addition}>Add</button>
      </main>
      <footer>
        contact me : {phoneNo}
      </footer>
    </div>
  );
}

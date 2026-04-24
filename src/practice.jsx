function Prop({ text = "Click me !", color = "Black", fontSize = 13 , handleButton}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button onClick= {handleButton} style={buttonStyle}>{text}</button>;
}

export default Prop;

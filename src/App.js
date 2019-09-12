import React from "react";
import axios from "axios";
import Image from "./Image";
import Title from "./Title";
import Date from "./Date";
import "./App.css"; 

function App() {

  axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
  .then((response) => {
    debugger
    console.log('this api call gives', response.data);
  })
  .catch();
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Title />
      <Date dateValue="Hello date"/>
      <Image imageUrl=""/>

    </div>
  );
}

export default App;

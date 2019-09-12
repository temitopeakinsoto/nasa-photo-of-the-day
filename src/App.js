import React from "react";
import Image from "./Image";
import Title from "./Title";
import Date from "./Date";
import "./App.css";

function App() {
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

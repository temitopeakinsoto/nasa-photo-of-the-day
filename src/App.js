import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import Title from "./Title";
import Date from "./Date";
import Explanation from "./Explanation";
import "./App.css";

function App() {

  const [apiCallError, setApiCallError] = useState(null);
  const [apiInfo, setApiInfo] = useState({ image: "", date: "", title: "", text: "" });

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")
      .then(response => {
        const axiosApiReturnData = response.data;
        setApiInfo({
          image: axiosApiReturnData.hdurl,
          date: axiosApiReturnData.date,
          title: axiosApiReturnData.title,
          text: axiosApiReturnData.explanation
        });
      })
      .catch(error => {
        const msg = error.message;
        apiCallError = setApiCallError(msg);
        return (
          <Title titleValue={apiCallError} />
        )
      });
  }, []);

  return (
    <div className="App">
      <Date dateValue={apiInfo.date} />
      <Title titleValue={apiInfo.title} />      
      <Image imageUrl={apiInfo.image} />
      <Explanation apodShortExplanation={apiInfo.text} />
    </div>
  )
}

export default App;

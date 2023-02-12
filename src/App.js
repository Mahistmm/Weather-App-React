import React, { useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result"
import axios from 'axios'

const App = () => {
  const [input, setInput] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  const findwheather = async() => {
    const apikey = "e1327c30c2e4207d8cbbf34ffb6941ba";
    const unit = "metric";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&appid=" +
      apikey +
      "&units=" +
      unit;

    const response = await axios.get(url)  
    const temp =  await response.data.main.temp;
    const description = await response.data.weather[0].description;
    const icon =  await response.data.weather[0].icon;
    const image = "https://openweathermap.org/img/wn/" +icon +"@2x.png";
    
    setTemp(temp);
    setDescription(description);
    setIcon(image)
    setInput("")
  };

  return (
    <div className="app">
      {   temp === "" ? (
        <Search input={input} setInput={setInput} findwheather={findwheather} />
      ):(
         <Result temp={temp} description={description} icon={icon} setTemp={setTemp}/>
      )}
      
    </div>
  );
};

export default App;

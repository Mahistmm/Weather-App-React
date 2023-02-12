import React from "react";
import { Input, Button } from "@mui/material";
import "./Searh.css";

const Search = ({ input, setInput , findwheather }) => {
  const handlechange = (event) => {
    setInput(event.target.value);
  };

const handleclick = (event)=>{
  event.preventDefault();
  findwheather()
}



  return (
    <div className="input">
      <div className="inputbox">
        <h1>Google Weather App</h1>
        <p>powered by</p>
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt="picture"
        />
        <form>
          <Input
            placeholder="Enter the city name "
            onChange={handlechange}
            value={input}
          />
          <br />
          <Button
            variant="contained"
            color="success"
            type="submit"
            onClick={handleclick}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Search;

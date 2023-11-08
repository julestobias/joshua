// Dependencies
import React from "react";
import "../tailwind.output.css";

// Assets

// Components
import Typography from "../components/Typography";

// Pages
// import Home from "./pages/Home";

const NavigationBar = () => {
  return (
    <>
      <div className={`px-10 pt-10 flex flex-row justify-end`}>
        <Typography
          label="Home"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-5 p-5 font-serif`}
        />
        <Typography
          label="My Work"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-5 p-5 font-serif`}
        />
        <Typography
          label="Contact Me"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-5 p-5 font-serif`}
        />
      </div>
    </>
  );
};

export default NavigationBar;

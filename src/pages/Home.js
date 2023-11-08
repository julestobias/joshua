// Dependencies
import React from "react";
import "../tailwind.output.css";

// Assets
import banner from "../images/Banner.jpg";

// Components
// import Typography from "../components/Typography";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
  const background = {
    backgroundImage: `url(${banner})`,
    backgroundSize: `cover`,
  };

  return (
    <div className={`min-h-screen`} style={background}>
      {/* <img src={banner} alt={`banner`} className={`h-100vh`} /> */}
      <NavigationBar />
    </div>
  );
};

export default Home;

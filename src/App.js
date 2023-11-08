// Dependencies
import React from "react";
import "./tailwind.output.css";

// Assets
import banner from "./images/Banner.jpg";

// Components
import Typography from "./components/Typography";
import NavigationBar from "./components/NavigationBar";
import Collage from "./components/Collage";

// Pages
// import Home from "./pages/Home";

const App = () => {
  const background = {
    backgroundImage: `url(${banner})`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    backgroundAttachment: `fixed`,
  };

  return (
    <div className={`min-h-100vh overflow-hidden`} style={background}>
      {/* <img src={banner} alt={`banner`} className={`h-100vh`} /> */}
      {/* <NavigationBar /> */}
      <div className={`flex flex-row justify-center`}>
        <Typography
          label="My Work"
          color={`text-gray-100`}
          style={`text-6xl font-serif`}
        />
      </div>
      <div className={`flex flex-row justify-center`}>
        <Typography
          label="Wedding"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="|"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="Portraits"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="|"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="Prenup"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="|"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="Birthday"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="|"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="Out and About"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="|"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
        <Typography
          label="Man's Best Friend"
          color={`text-gray-100`}
          style={`text-xl font-medium mx-2 px-2 font-serif`}
        />
      </div>
      <div className={`flex flex-row justify-center p-6`}>
        <div className={`w-5/6`}>
          <Collage />
        </div>
      </div>
    </div>
  );
};

export default App;

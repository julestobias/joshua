// DEPENDENCIES
import React from "react";

// Assets
import ImagesForCollage from "../images/wedding";

const Collage = () => {
  return (
    <div className={`bg-white w-full h-full p-5 rounded-lg`}>
      <div
        className="grid gap-5 grid-flow-dense grid-rows-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)" }}
      >
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x1}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x2}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x3}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x4}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x5}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x6}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x7}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x8}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x9}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x10}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x11}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
        <div className={`flex justify-center items-center`}>
          <img
            src={ImagesForCollage.x12}
            alt=""
            className={`inline-block align-middle w-full object-cover rounded-lg`}
            style={{ height: "250px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Collage;

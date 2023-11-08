// DEPENDENCIES
import React from "react";

const Typography = ({ label, color, style }) => {
  return (
    <div>
      <p className={`${color} ${style}`}>{label}</p>
    </div>
  );
};

export default Typography;


import React from "react";

function Preloader() {
  return (

    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">

      <img
        src="https://static1.squarespace.com/static/54179d62e4b0af003a219a13/544d5ec0e4b05929edba7329/544d5ec3e4b0c630359c4059/1414356687825/plant_moving_650.gif"
        alt="loading"
        className="w-64 h-64 object-contain"
      />

    </div>

  );
}

export default Preloader;
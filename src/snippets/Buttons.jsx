import React from "react";

function Buttons(props) {
  return (
    <button className="text-lg leading-[26px] font-medium text-white hover:text-[#ffffff] p-[16px_20px] rounded transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l  from-cyan-500 to-blue-500">
      {props.name}
    </button>
  );
}

export default Buttons;
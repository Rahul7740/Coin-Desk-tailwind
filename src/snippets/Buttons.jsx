import React from "react";

function Buttons(props) {
  return (
    <button
      className={` rounded transition-all duration-300 ;
] bg-gradient-to-r p-[4px] group from-cyan-500 to-blue-500 w-full sm:w-auto ${props.class}`}
    >
      <h3 className="text-lg leading-[26px] font-medium bg-transparent group-hover:bg-white text-white group-hover:text-cyan-500 p-[12px_16px]  rounded transition-all duration-300">
        {props.name}
      </h3>
    </button>
  );
}

export default Buttons;

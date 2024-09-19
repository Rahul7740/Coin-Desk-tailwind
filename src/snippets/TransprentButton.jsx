import React from "react";

function TransprentButton(props) {
  return (
    <button className=" rounded border-[1px] border-[#0070E4] border-solid transition-all duration-300 bg-white hover:bg-[#0070E4] p-[10px_18px] group">
      <h5 className="rounded bg-gradient-to-l from-[#25A1FF] to-[#0070E4] bg-clip-text text-transparent transition-all duration-300 group-hover:text-white text-[14px] leading-[17px] font-medium ">
        {props.name}
      </h5>
    </button>
  );
}

export default TransprentButton;

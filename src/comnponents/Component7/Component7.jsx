import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Component7() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);


  const handleOpen = () => {
    setOpen(!open);
  };
  const handleCalender = () => {
    setDate(!date);
  };


  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">Component title 7</p>
          <RiArrowDropDownLine className="react_arrow" />
        </div>
        {open && (
          <div>
            <span>Lorem Ipsum dolores sit</span>
            <div onClick={handleCalender}>DD/MM/YYYY</div>
            {date && (
                  <div></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

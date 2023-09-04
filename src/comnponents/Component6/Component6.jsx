import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Component6.css";
export default function Component6() {
  const [open, setOpen] = useState(false);
  const [startValue, setStartValue] = useState(90);
  const [endValue, setEndValue] = useState(10);
  const handleOpen = () => {
    setOpen(!open);
  };


  const decrementStartValue = () => {
    if (startValue<10) {
        return
    }
    setStartValue(startValue - 10);
  };

  const incrementEndValue = () => {
    if (endValue>90) {
        return
    }
    setEndValue(endValue + 10);
  };
  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">Component title 6</p>
          <p>
            {open ? (
              <i className="fas fa-angle-down rotate"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </p>
        </div>
        {open && (
          <ul className="ul_design">
            <li>Lorem Ip</li>
            <li>
              <input
                type="text"
                className="text_input"
                value={startValue}
              />
            </li>
            <li>
              <button className="angle_btn_design" onClick={decrementStartValue}>
                <i className="fas fa-angle-left"></i>
              </button>
              <button className="angle_btn_design" onClick={incrementEndValue}>
                <i className="fas fa-angle-right"></i>
              </button>
            </li>
            <li>
              <input
                type="text"
                className="text_input"
                value={endValue}
              />
            </li>
            <li> % Lorem Ip</li>
          </ul>
        )}
      </div>
    </div>
  );
}

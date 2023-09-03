import React, { useState } from "react";
import "./Component4.css";
import bottomarrow from "../../assets/Group.png";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Component4() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={`${!open ? "component_four":"component_full"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">Component title 4</p>
          <RiArrowDropDownLine className="react_arrow" />
        </div>
        {open && (
          <div>
            <ul className="ul_design">
              <li>From</li>
              <li>
                <input type="text" className="text_input" defaultValue={10} />
              </li>
              <li> to</li>
              <li>
                <input type="text" className="text_input" defaultValue={15} />
              </li>
              <li> lorem</li>
              <li>
                <select className="options">
                  <option>option 1</option> <br />
                  <option>option 2</option>
                </select>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

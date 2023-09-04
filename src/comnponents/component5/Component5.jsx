import React, { useState } from "react";
import "./Component5.css";
export default function Component5() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
  ]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [newOptions, setNewOptions] = useState([]);
  const handleFilter = (value) => {
    const newArray = options.filter((i) => i !== value);
    setOptions(newArray);
    setNewOptions((current) => [...current, value]);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredOptions);
    setOptions(filteredOptions);
  };
  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">
            Component title 5{" "}
            {newOptions.length > 0 && <span>({newOptions.length})</span>}
          </p>
          <p>
            {open ? (
              <i className="fas fa-angle-down rotate"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </p>
        </div>
        {open && (
          <>
            {/* picked */}
            <div className="picked">
              <small style={{ textAlign: "left" }}>Picked</small>
              {newOptions.map((option, index) => (
                <div key={index} className="all_checkbox">
                  <div className="checkbox">
                    <div className="inner_box"></div>
                  </div>
                  <span className="option_text_design">{option}</span>
                </div>
              ))}
            </div>
            {/*  all element */}
            <div className="search_container">
              <small>All</small>
              <div>
                <input
                  type="text"
                  className="search_input"
                  onChange={handleSearch}
                />
                {options.map((option, index) => (
                  <div
                    className="all_checkbox"
                    onClick={() => handleFilter(option)}
                  >
                    <div className="checkbox">
                      <div className="inner_box"></div>
                    </div>
                    <p className="option_text_design ">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

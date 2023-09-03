import React, { useState } from "react";
import "./Component5.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
];

export default function Component5() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [searchText, setSearchText] = useState("");
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

  const handleSelect = (index) => (e) => {
    let isChecked = e.target.checked;
    const item = options[index]; //
    const updatedSelectedItems = [...selectedItem];
    if (isChecked) {
      updatedSelectedItems.push(item);
      isChecked = false;
    } else {
      const itemIndex = updatedSelectedItems.indexOf(item);
      if (itemIndex !== -1) {
        updatedSelectedItems.splice(itemIndex, 1);
      }
    }
    const removedItems = options.filter((_, i) => i !== index); //
    // console.log(removedItems);
    setOptions(removedItems);
    setSelectedItem(updatedSelectedItems);
  };


  const [newOp, setNewOp]=useState([])

  const handleFilter =(value)=>{

    const newAAA = options.filter(i=>i!==value)
    setOptions(newAAA)

    setNewOp(current=>[...current,value])

   
  }


  const handleSearch = (e) => {
    const searchText = e.target.value;
    // console.log(searchText);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredOptions);
    setOptions(filteredOptions);
  };

  return (
    <div>
      <div className={`${!open ? "component_four":"component_full"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">
            Component title 5{" "}
            {newOp.length > 0 && <span>({newOp.length})</span>}
          </p>
          <RiArrowDropDownLine className="react_arrow" />
        </div>
        {open && (
          <>
            {/* picked */}
            <div className="picked">
              <small style={{ textAlign: "left" }}>Picked</small>
              {newOp.map((option, index) => (
                <div key={index} className="all_checkbox">
                  <input checked type="checkbox" onChange={handleSelect(index)} />
                  <span className="option_text_design">{option}</span>
                </div>
              ))}
            </div>
            {/* // all element */}
            <div className="search_container">
              <small>All</small>
              <div>
                <input
                  type="text"
                  className="search_input"
                  onChange={handleSearch}
                />
                {options.map((option, index) => (
                  <div className="all_checkbox">
                    <input
                      type="checkbox"
                      checked = {false}
                      // onChange={handleSelect(index)}
                      onClick={()=>handleFilter(option)}
                      className=""
                    />
                    <span className="option_text_design">{option}</span>
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

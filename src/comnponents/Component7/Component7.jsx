import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Component7.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
export default function Component7() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [dateState, setDateState] = useState(null);
  const [showTodayDate, setShowTodayDate] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleCalender = () => {
    setDate(!date);
  };
  console.log(dateState);
  const changeDate = (e) => {
    setDateState(e);
  };
  const toggleTodayDate = () => {
    if (!showTodayDate) {
      const today = new Date();
      setDateState(today);
    } else {
      setDateState(null);
    }
    setShowTodayDate(!showTodayDate);
  };

  const formattedDate = dateState ? (
    dateState.toLocaleDateString("en-GB")
  ) : (
    <div className="dddddd">
      <small> DD / MM / YYYY</small>
     {/*  <p>
        {open ? (
          <i className="fas fa-angle-down "></i>
        ) : (
          <i className="fas fa-angle-down rotate"></i>
        )}
      </p> */}
    </div>
  );

  return (
    <div>
      <div className={`${!open ? "component_four" : "component_full_seven"}`}>
        <div onClick={handleOpen} className="heading">
          <p className="title">Component title 7</p>
          <p>
            {open ? (
              <i className="fas fa-angle-down rotate"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )}
          </p>
        </div>
        {open && (
          <div>
            <div className="date_container">
              <span> Lorem Ipsum dolores sit</span>
              <div onClick={handleCalender} className="date_btn">
                {formattedDate}
              </div>
            </div>
            {date && (
              <div className="calender_design">
                <Calendar value={dateState} onChange={changeDate} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

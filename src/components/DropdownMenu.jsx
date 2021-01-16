import React from "react";
import { useState, useEffect } from 'react';
import angleUp from "../images/angle-up-solid.svg";
import angleDown from "../images/angle-down-solid.svg";
import check from "../images/check-solid.svg";


const DropdownMenu = ({title, list, resetThenSet}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title);

  const closeDropDown = () => {
    setIsListOpen(false);
    window.removeEventListener('click', closeDropDown);
    // console.log("activate");
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if(isListOpen){
  //       window.addEventListener('click', closeDropDown);
  //       console.log("addEventListener");
  //     }
  //     else{
  //       window.removeEventListener('click', closeDropDown);
  //     }
  //   }, 0);
  // });

  const selectItem = (item) => {
    const {title, id, key} = item;
    setHeaderTitle(title);
    setIsListOpen(false);
    resetThenSet(id, key);
  };

  const clickDropdownTitle = () => {
    setTimeout(() => {
      if (!isListOpen) { 
        window.addEventListener('click', closeDropDown);
      } else {
        window.removeEventListener('click', closeDropDown);
      }}, 0);
    setIsListOpen(!isListOpen);
  };

  console.log("isListOpen is: " + isListOpen);
  return (
    <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
        onClick={clickDropdownTitle}
      >
        <div className="dd-header-title">{headerTitle}</div>
        {isListOpen
          ? <img className="angle-title" src={angleUp} alt="angleUp" />
          : <img className="angle-title" src={angleDown} alt="angleDown" />}
      </button>
      {isListOpen && (
        <div
          role="list"
          className="dd-list"
        >
          {list.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.id}
              onClick={() => selectItem(item)}
            >
              {item.title}
              {' '}
              {item.selected && <img className="angle-select" src={check} alt="check" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
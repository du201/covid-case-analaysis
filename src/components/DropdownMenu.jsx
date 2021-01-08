import React from "react";


const DropdownMenu = ({selections, currentSelection, changeSelection}) => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {currentSelection}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {selections.map((stateName, index) => {
          return <a className="dropdown-item" href="#" key={index} onClick={() => changeSelection(stateName)}>{stateName}</a>
        })}
        {/* <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a> */}
      </div>
    </div>
  );
};

export default DropdownMenu;
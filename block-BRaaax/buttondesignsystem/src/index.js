import React from "react";
import ReactDOM from "react-dom";

// buttons are of three types  primary secondary and tertiary. 
// Primary -> primary buttons have background color 
// Secondary -> Secondary buttons  are ghost button have no background but have a border 
// Tertiary -> Tertiary buttons  do not  have any kind of background and border 

// Buttons are of three sizes -> small medium large
function Button(props) {
  return (
    <button
      disabled={props.disabled}
      size={props.size}
      type={props.size}
      onClick={props.onClickHandler}
    >
      {props.label}
    </button>
  );
}


ReactDOM.render(<Button label="click me" size="medium"  type="primary"/>, document.querySelector("#root"));

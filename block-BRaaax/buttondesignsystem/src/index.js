import React from "react";
import ReactDOM from "react-dom";

// buttons are of three types  primary secondary and tertiary.
// Primary -> primary buttons have background color
// Secondary -> Secondary buttons  are ghost button have no background but have a border
// Tertiary -> Tertiary buttons  do not  have any kind of background and border

// Buttons are of three sizes -> small medium large

function getStyles(props) {
  let { type = "primary", size = "medium" } = props;
  return `button button-${type} button-${size}`;
}
function Button(props) {
  return (
    <button
      className={getStyles(props)}
      disabled={props.disabled}
      onClick={props.onClickHandler}
    >
      {props.label}
    </button>
  );
}

ReactDOM.render(
  <>
    <Button label="click me" size="medium" type="primary" />
    <Button label="click me" size="large" type="secondary" />
    <Button label="click me" size="normal" type="tertiary" />
    <Button
      label="click to alert a message"
      type="primary"
      onClickHandler={() => alert("You Clicked Me!")}
    />
  </>,
  document.querySelector("#root")
);

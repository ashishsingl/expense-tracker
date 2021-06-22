import React from "react";
import "./transInput.css";

const TransInput = ({
  setData,
  mainHeading,
  placeHolder,
  type,
  name,
  symbolHidden,
  textCalculate,
  value,
}) => {
  let styleObj;
  if (symbolHidden === true) {
    styleObj = {
      display: "none",
    };
  } else {
    styleObj = {};
  }

  return (
    <div className="transInput__container">
      <form className="transaction__amountContainer">
        <div className="transaction__subHeading">
          <p className="transaction__amountMainHeading">{mainHeading}</p>
          {type === "text" ? (
            <span className="input__textCalculate">{textCalculate}/15</span>
          ) : (
            <span></span>
          )}
        </div>
        <span className="transaction__currency" style={styleObj}>
          ₹
        </span>
        <input
          onChange={setData}
          className="transaction__amountInput"
          type={type}
          placeholder={placeHolder}
          name={name}
          value={value}
        />
      </form>
    </div>
  );
};

export default TransInput;

import React,{useState} from "react";
import "./indicator.css"

const Indicator = ({setCurrStatement}) => {
  // Setting income and expense statement
  const indicator = {
    left: "indicator__middleLeftCircle",
    right: "indicator__middleRightCircle",
  };

  //Creating hooks for income and expense tab change
  const [modifyClass, setModifyClass] = useState(indicator.left);

  //when user enables income
  const inIncome = () => {
    setModifyClass(indicator.left);
    setCurrStatement((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        entryType: "income",
      };
    });
  };

  //When user enables expense
  const inExpense = () => {
    setModifyClass(indicator.right);
    setCurrStatement((preValue) => {
      console.log("this is prevalue", preValue);
      return {
        ...preValue,
        entryType: "expense",
      };
    });
  };

  return <div className="indicator__container">
       <div className={modifyClass}></div>
        <div className="indicator__typeMiddle">
          <div className="indicator__middleLeft" onClick={inIncome}></div>
          <div className="indicator__middleRight" onClick={inExpense}></div>
        </div>
  </div>;
};

export default Indicator;

import React from "react";

export const Transactions = ({ text, cost, removeTransaction, type }) => {
  return (
    <>
      <div className="wrapper">
        <div className={type}>
          <div className="content">
            <span> {text} </span> <span>${cost}</span>
          </div>
        </div>
        <button className="delete-btn" onClick={removeTransaction}>
          X
        </button>
      </div>
    </>
  );
};

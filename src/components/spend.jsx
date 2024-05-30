import React from "react";
export const Spend = ({ income, expense }) => {
  return (
    <>
      <div className="spendings">
        <div className="income">
          <h3>Income</h3>
          <h3>${income}</h3>
        </div>
        <div className="expense">
          <h3>Expenses</h3>
          <h3>${expense}</h3>
        </div>
      </div>
    </>
  );
};

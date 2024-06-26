import React, { memo } from "react";

const ClearButton = memo(({ handleClear }) => {
  console.log("Render => ClearButton Component");
  return (
    <div>
      ClearButton Component
      <button className=" btn  btn-success m-4" onClick={handleClear}>
        Clear Button
      </button>
    </div>
  );
});

export default ClearButton;

import React from "react";

const Spinner = ({ type }) => {
  return (
    <div class="w-100 text-center">
      <div
        class={`spinner-${type}`}
        role="status"
        style={{ width: "6rem", height: "6rem", color: "#FF9900" }}
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

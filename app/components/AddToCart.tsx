"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="text-white bg-slate-700 py-2.5 px-5 rounded-md hover:text-black hover:bg-blue-200"
        onClick={() => console.log("Clicked")}
      >
        Add to Cart{" "}
      </button>
    </div>
  );
};

export default AddToCart;

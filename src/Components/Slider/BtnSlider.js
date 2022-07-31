import React from "react";
import "./Slider.scss";


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {
        direction === "next" ? <span class="material-symbols-outlined">
          arrow_forward_ios
        </span> : <span class="material-symbols-outlined">
          arrow_back_ios
        </span>
      }
    </button>
  );
}

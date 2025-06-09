import React from "react";
import "./Button.css";

export default function Button({ children, onClick, type = "button", variant = "primary", style, ...props }) {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      type={type}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

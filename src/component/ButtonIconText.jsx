import React from "react";

const ButtonIconText = ({
  icon: Icon,
  label = "Button",
  bgColor = "bg-blue",
  textColor = "white",
  textSize = "sm",
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex ${bgColor}-500 text-${textColor} p-2 py-1 items-center text-${textSize} hover:${bgColor}-600 ${className}`}
    >
      {Icon && <Icon className="mx-1" />}
      <span className="hidden sm:block">{label}</span>
    </button>
  );
};

export default ButtonIconText;

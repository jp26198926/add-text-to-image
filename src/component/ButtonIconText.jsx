import React from "react";

const ButtonIconText = ({
  icon: Icon,
  label = "Button",
  bgColor = "bg-blue",
  textColor = "white",
  textSize = "sm",
  onClick,
  className = "",
}) => {
  const setBgColor = `${bgColor}-500`;
  const setBgColorHover = `hover:${bgColor}-600`;
  const setTextColor = `text-${textColor}`;
  const setTextSize = `text-${textSize}`;

  return (
    <button
      onClick={onClick}
      className={`flex ${setBgColor} ${setTextColor} p-2 py-1 items-center ${setTextSize} ${setBgColorHover} ${className}`}
    >
      {Icon && <Icon className="mx-1" />}
      <span className="hidden sm:block">{label}</span>
    </button>
  );
};

export default ButtonIconText;

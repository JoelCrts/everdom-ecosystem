import React from 'react';
const Button = ({
  styles
}) => {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `py-4 px-6 bg-[#A9F6BD] font-inter
    font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`
  }, "Inicia hoy");
};
export default Button;
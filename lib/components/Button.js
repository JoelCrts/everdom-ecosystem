import React from 'react';
const Button = ({
  styles
}) => {
  return /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/523323329221?text=Hola,%20me%20interesa%20obtener%20m\xE1s%20informaci\xF3n",
    target: "_blank"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `py-6 px-16 bg-[#A9F6BD] font-roboto
      font-medium text-[24px] text-primary outline-none ${styles} rounded-[10px]`
  }, "Inicia hoy"));
};
export default Button;
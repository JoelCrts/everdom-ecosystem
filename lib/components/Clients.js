import React from 'react';
import styles from '../style';
import Button from './Button';
const Clients = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    className: `${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col
    bg-black-gradient-2 rounded-[20px] box-shadow`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col"
  }, /*#__PURE__*/React.createElement("h2", {
    className: `${styles.heading2}`
  }, "\xDAnete al Everdom"), /*#__PURE__*/React.createElement("p", {
    className: `${styles.paragraph} max-w-[470px] mt-5`
  }, "La solidez de tu futuro la decides t\xFA, elige crecer con nosotros.")), /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexCenter} sm:ml-10 ml-2 sm:mt-0 mt-10`
  }, /*#__PURE__*/React.createElement(Button, null)));
};
export default Clients;
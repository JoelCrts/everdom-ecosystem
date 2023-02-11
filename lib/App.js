import react from 'react';
import styles from './style';
import { Navbar, Hero, Products, Clients, Business, Footer, Ecosystem } from './components';
const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-primary w-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.paddingX} ${styles.flexCenter}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.boxWidth}`
  }, /*#__PURE__*/React.createElement(Navbar, null))), /*#__PURE__*/React.createElement("div", {
    className: `bg-primary ${styles.flexStart}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.boxWidth} pt-8 pb-36`
  }, /*#__PURE__*/React.createElement(Hero, null))), /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexStart}`
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#FFFF] w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt-24"
  }, /*#__PURE__*/React.createElement(Business, null)), /*#__PURE__*/React.createElement("div", {
    className: "bg-contain mt-24 pb-0 mb-0 bg-no-repeat bg-right-bottom bg-[url('/src/assets/graficaCurva01.png')]"
  }, /*#__PURE__*/React.createElement(Ecosystem, null)), /*#__PURE__*/React.createElement("div", {
    className: "pb-24 pt-24"
  }, /*#__PURE__*/React.createElement(Products, null))), /*#__PURE__*/React.createElement("div", {
    className: `${styles.padding} bg-primary`
  }, /*#__PURE__*/React.createElement(Clients, null), /*#__PURE__*/React.createElement(Footer, null)))));
};
export default App;
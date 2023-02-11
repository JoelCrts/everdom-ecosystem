import React from 'react';
import { productosEverdom } from "../assets";
import styles from '../style';
const Products = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.paddingY}`
  }, /*#__PURE__*/React.createElement("img", {
    src: productosEverdom,
    alt: "productos",
    className: "self-start"
  })));
};
export default Products;
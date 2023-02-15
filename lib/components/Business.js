import React from 'react';
import { features } from "../constants";
import styles, { layout } from "../style";
const FeatureCard = ({
  icon,
  title,
  content,
  index
}) => /*#__PURE__*/React.createElement("div", {
  className: `flex flex-row p-6 rounded-[20px] ${index !== features.lenght - 1 ? "mb-6" : "mb-0"} hover:bg-[#A9F6BD]`
}, /*#__PURE__*/React.createElement("div", {
  className: `w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`
}, /*#__PURE__*/React.createElement("img", {
  src: icon,
  alt: "icon",
  className: "w-[50%] h-[50%] object-contain"
})), /*#__PURE__*/React.createElement("div", {
  className: "flex-1 flex flex-col ml-3"
}, /*#__PURE__*/React.createElement("h4", {
  className: "font-roboto font-semibold text-[#000000] text-[18px] leading-[23px] mb-1"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "font-inter font-normal text-[#000000] text-[16px] leading-[24px] mb-1"
}, content)));
const Business = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    className: `${layout.section}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${layout.sectionInfo} ${styles.padding}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: `${styles.heading2} text-[#000000]`
  }, "Inversiones que ", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), "se renuevan."), /*#__PURE__*/React.createElement("p", {
    className: `font-inter font-light text-[25px] leading-[30.8px] text-[#000000] max-w-[530px] mt-5`
  }, "Somos un ecosistema que ofrece una diversa variedad de sectores de inversi\xF3n; desde una primera aportaci\xF3n puedes generar rendimientos que a largo plazo dar\xE1n forma a otros proyectos, reinvertirtiendo en diferentes sectores financieros.")), /*#__PURE__*/React.createElement("div", {
    className: `${layout.sectionImg} ${styles.paddingX} flex-col`
  }, features.map((feature, index) => /*#__PURE__*/React.createElement(FeatureCard, Object.assign({
    key: feature.id
  }, feature, {
    index: index
  })))));
};
export default Business;
import React from 'react';
import { facebook, instagram, linkedin, logoBlanco2, twitter } from "../assets";
import { socialMedia } from '../constants';
import styles from '../style';
import '../constants/index';
const Footer = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: `${styles.flexCenter} ${styles.paddingX} flex-col`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexStart} md:flex-row flex-col mb-8 w-full`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col justify-start mr-10"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoBlanco2,
    alt: "logoBlanco",
    className: "w-[266px] h-[72px] object-contain"
  }), /*#__PURE__*/React.createElement("p", {
    className: `${styles.paragraph} mt-4 max-w-[310px]`
  }, "Un ciclo que prevalece, ", /*#__PURE__*/React.createElement("br", null), "se renueva.")), /*#__PURE__*/React.createElement("div", {
    className: "flex-[1.5] w-full flex md:justify-end flex-wrap md:mt-0 mt-10 pt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col ss:my-0 my-4 min-w-[150px]"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-roboto font-medium text-[18px] leading[27px] text-white"
  }, "Cont\xE1ctanos"), /*#__PURE__*/React.createElement("ul", {
    className: "list-none mt-4"
  }, /*#__PURE__*/React.createElement("li", {
    className: "font-inter font-normal text-[16px]\r leading-[24px] text-dimWhite hover:text-[#A9F6BD] cursor-pointer"
  }, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "contacto@everdom.mx")), /*#__PURE__*/React.createElement("li", {
    className: "font-inter font-normal text-[16px]\r leading-[24px] text-dimWhite hover:text-[#A9F6BD] cursor-pointer"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/523323329221?text=Hola,%20me%20interesa%20obtener%20m\xE1s%20informaci\xF3n",
    target: "_blank"
  }, "+52 33 2332 9221")))))), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-center text-[18px] leading[27px] text-white"
  }, "2023 Everdom. All Rights Reserved."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row md:mt-0 mt-6 gap-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/everdom.ei/",
    target: "_blank",
    classname: "w-[21px] h-[21px] object-contain cursor-pointer"
  }, /*#__PURE__*/React.createElement("img", {
    src: instagram,
    alt: "instagram"
  })), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, /*#__PURE__*/React.createElement("img", {
    src: facebook,
    alt: "facebook",
    target: "_blank",
    classname: "w-[21px] h-[21px] object-contain cursor-pointer"
  })), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, /*#__PURE__*/React.createElement("img", {
    src: twitter,
    alt: "twitter",
    target: "_blank",
    classname: "w-[21px] h-[21px] object-contain cursor-pointer"
  })), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, /*#__PURE__*/React.createElement("img", {
    src: linkedin,
    alt: "linkedin",
    target: "_blank",
    classname: "w-[21px] h-[21px] object-contain cursor-pointer mr-0"
  })))));
};
export default Footer;
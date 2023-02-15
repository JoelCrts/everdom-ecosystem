import React from 'react';
import styles from '../style';
import { everdomIcon } from '../assets';
const Hero = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "justify-between columns-2 flex md:flex-row flex-col py-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-span-1 flex flex-row justify-between items-center w-full"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-roboto font-semibold ss:text-[65px]  text-[50px] text-white ss:leading-[100px] leading-[75px]"
  }, "As\xED como un r\xEDo ", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), " ", " ", "sigue su ciclo. ", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), " ", " ", /*#__PURE__*/React.createElement("span", {
    className: "text-[#A9F6BD]"
  }, "Nosotros tambi\xE9n."))), /*#__PURE__*/React.createElement("div", {
    "row-span-2": true
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-roboto font-light text-[#FFFF] text-[20px] leading-[30px] max-w-[550px] mt-5"
  }, "La naturaleza de los ecosistemas c\xEDclicos es fascinante: lo vemos en las cadenas alimenticias, la reproducci\xF3n o incluso con los aros de las vetas en los \xE1rboles, todas traen bondades de forma natural en repetici\xF3n, una y otra vez, creando un ciclo que trae estabilidad y abundancia a todo lo que involucra. Lo mismo ocurre al invertir correctamente, se convierte en un ciclo que prevalece y enverdece lo que toca a su paso."))), /*#__PURE__*/React.createElement("div", {
    className: `${styles.padding} justify-center sm:flex-row`
  }, /*#__PURE__*/React.createElement("img", {
    src: everdomIcon,
    alt: "everdomIcon",
    className: "flex-1 max-w-[400px] max-h-[400px] justify-center z-10"
  })));
};
export default Hero;
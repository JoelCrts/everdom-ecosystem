import React from 'react';
import { bursatil01, recursos02, franquicias03, startup04 } from "../assets";
import styles, { layout } from '../style';
const Ecosystem = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "ecosistema",
    className: `${styles.padding}`
  }, /*#__PURE__*/React.createElement("div", {
    className: layout.sectionInfo
  }, /*#__PURE__*/React.createElement("h2", {
    className: "font-roboto font-semibold xs:text-[65px] text-[60px] text-[#000000] xs:leading-[76.8px] leading-[66.8px] w-full mb-8"
  }, "Nuestro ecosistema ", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), "de inversiones. "), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.paddingX
  }, /*#__PURE__*/React.createElement("img", {
    src: bursatil01,
    alt: "bursatil01",
    className: "max-w-[100%] object-scale-down max-h-[71px]"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "Nuestra tasa de rendimientos es variable, asignando para nuestros inversionistas el 50% de lo generado mes con mes."), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "Para nosotros la transparencia es muy importante, por esto, Everdom no recibe en ning\xFAn momento tu dinero, por medio de nuestro broker de confianza crear\xE1s tu propia cuenta, donde podr\xE1s tener acceso y control sobre tu dinero, incrementar tu cuenta o retirar en el momento que lo desees.")), /*#__PURE__*/React.createElement("div", {
    className: `${styles.paddingX}`
  }, /*#__PURE__*/React.createElement("img", {
    src: recursos02,
    alt: "recursos02",
    className: "max-w-[100%] object-scale-down max-h-[71px]"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "Podr\xE1s tener participaci\xF3n parcial o total de una o m\xE1s propiedades y desarrollos generando un ingreso adicional para ti, ya sea por concepto de arrendamiento o por venta del inmueble.")), /*#__PURE__*/React.createElement("div", {
    className: styles.paddingX
  }, /*#__PURE__*/React.createElement("img", {
    src: franquicias03,
    alt: "franquicias03",
    className: "max-w-[100%] object-scale-down max-h-[71px]"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "De manera conjunta o individual, podr\xE1s ser accionista de una franquicia sin tener que preocuparte por la administraci\xF3n de esta, ya que Everdom te acompa\xF1ar\xE1 en la gesti\xF3n y administraci\xF3n de la misma, recibiendo de manera mensual los rendimientos generados.")), /*#__PURE__*/React.createElement("div", {
    className: `${styles.paddingX}`
  }, /*#__PURE__*/React.createElement("img", {
    src: startup04,
    alt: "startup04",
    className: "max-w-[100%] object-scale-down max-h-[71px]"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "Everdom evaluar\xE1 y te recomendar\xE1 start-ups con potencial de crecimiento para que puedas ser parte de ellas ayudando a la generaci\xF3n de empleos formales, crecer tu patrimonio y el de dichas empresas.")))));
};
export default Ecosystem;
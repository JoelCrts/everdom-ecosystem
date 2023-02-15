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
  }, "Everdom gestionar\xE1 tu capital y te har\xE1 llegar un reporte mensual con el detalle de los rendimientos generados. Al contar con tu capital en cuenta propia, nuestro Broker se encargar\xE1 de dispersar los rendimientos correspondientes, donde te corresponder\xE1 del 40% al 50%* y el resto lo dispersar\xE1 a Everdom, tu gestor de capital."), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "Para nosotros es muy importante la transparencia, por esto ponemos a tu disposici\xF3n una plataforma donde podr\xE1s ver en vivo el crecimiento de tu capital. Tambi\xE9n podr\xE1s aumentar o retirar tu dinero en el momento que dese\xE9s.")), /*#__PURE__*/React.createElement("div", {
    className: `${styles.paddingX}`
  }, /*#__PURE__*/React.createElement("img", {
    src: recursos02,
    alt: "recursos02",
    className: "max-w-[100%] object-scale-down max-h-[71px]"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "Podr\xE1s tener propiedad parcial o total de una o m\xE1s propiedades y desarrollos generando un ingreso adicional para ti, ya sea por concepto de arrendamiento o por venta del inmueble.")), /*#__PURE__*/React.createElement("div", {
    className: styles.paddingX
  }, /*#__PURE__*/React.createElement("img", {
    src: franquicias03,
    alt: "franquicias03",
    className: "max-w-[100%] object-scale-down max-h-[71px]"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4"
  }, "De manera conjunta o individual, podr\xE1s ser accionista de una franquicia sin tener que preocuparte por la administraci\xF3n de esta, ya que Everdom te acompa\xF1ar\xE1 y har\xE1 la gesti\xF3n de la misma. Recibiendo de manera mensual los rendimientos generados.")), /*#__PURE__*/React.createElement("div", {
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
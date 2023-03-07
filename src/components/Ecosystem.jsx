import React from 'react'
import { bursatil01, recursos02, franquicias03, startup04  } from "../assets";
import styles, { layout } from '../style';

const Ecosystem = () => {
  return (
    <section id="ecosistema" className={`${styles.padding}`}>
        <div className={layout.sectionInfo}>
            <h2 className="font-roboto font-semibold xs:text-[65px] text-[60px] text-[#000000] xs:leading-[76.8px] leading-[66.8px] w-full mb-8">
              Nuestro ecosistema <br className="sm:block hidden"/> 
              de inversiones. </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className={styles.paddingX}>
                  <img src={bursatil01} alt="bursatil01" className="max-w-[100%] object-scale-down max-h-[71px]" />
                  <p className="font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4">
                  Nuestra tasa de rendimientos es variable, asignando para nuestros inversionistas el 50% de lo generado 
                  mes con mes. 
                  </p>
                  <p className="font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4">
                  Para nosotros la transparencia es muy importante, por esto, Everdom no recibe en ningún momento tu dinero, 
                  por medio de nuestro broker de confianza crearás tu propia cuenta, donde podrás tener acceso y control 
                  sobre tu dinero, incrementar tu cuenta o retirar en el momento que lo desees.
                  </p>
              </div>
              <div className={`${styles.paddingX}`}>
                  <img src={recursos02} alt="recursos02" className="max-w-[100%] object-scale-down max-h-[71px]"/>
                  <p className="font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4">
                  Podrás tener participación parcial o total de una o más
                  propiedades y desarrollos generando un ingreso adicional
                  para ti, ya sea por concepto de arrendamiento o por venta
                  del inmueble.
                  </p>
              </div>




              <div className={styles.paddingX}>
                  <img src={franquicias03} alt="franquicias03" className="max-w-[100%] object-scale-down max-h-[71px]" />
                  <p className="font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4">
                  De manera conjunta o individual, podrás ser accionista de
                  una franquicia sin tener que preocuparte por la
                  administración de esta, ya que Everdom te acompañará en la gestión 
                  y administración de la misma, recibiendo de manera mensual los rendimientos generados.
                  </p>
              </div>
              <div className={`${styles.paddingX}`}>
                  <img src={startup04} alt="startup04" className="max-w-[100%] object-scale-down max-h-[71px]" />
                  <p className="font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4">
                  Everdom evaluará y te recomendará start-ups con
                  potencial de crecimiento para que puedas ser parte de
                  ellas ayudando a la generación de empleos formales,
                  crecer tu patrimonio y el de dichas empresas.
                  </p>
              </div>
            </div>
        </div>

    </section>
  )
}

export default Ecosystem

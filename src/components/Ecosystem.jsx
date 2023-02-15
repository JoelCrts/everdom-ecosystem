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
                  Everdom gestionará tu capital y te hará llegar un reporte mensual
                  con el detalle de los rendimientos generados. Al contar con tu
                  capital en cuenta propia, nuestro Broker se encargará de
                  dispersar los rendimientos correspondientes, donde te
                  corresponderá del 40% al 50%* y el resto lo dispersará a Everdom,
                  tu gestor de capital. 
                  </p>
                  <p className="font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4">
                  Para nosotros es muy importante la transparencia, por esto
                  ponemos a tu disposición una plataforma donde podrás ver en
                  vivo el crecimiento de tu capital. También podrás aumentar o
                  retirar tu dinero en el momento que deseés.
                  </p>
              </div>
              <div className={`${styles.paddingX}`}>
                  <img src={recursos02} alt="recursos02" className="max-w-[100%] object-scale-down max-h-[71px]"/>
                  <p className="font-inter font-normal text-[#000000] text-[18px] leading-[20px] max-w-[650px] my-4">
                  Podrás tener propiedad parcial o total de una o más
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
                  administración de esta, ya que Everdom te acompañará y
                  hará la gestión de la misma. Recibiendo de manera
                  mensual los rendimientos generados.
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

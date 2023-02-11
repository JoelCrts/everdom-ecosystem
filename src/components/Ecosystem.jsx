import React from 'react'
import { bursatil01, recursos02, franquicias03, startup04  } from "../assets";
import styles, { layout } from '../style';

const Ecosystem = () => {
  return (
    <section id="ecosistema" className={`${layout.section} ${styles.padding}`}>
        <div className={layout.sectionInfo}>
            <h2 className="font-roboto font-semibold xs:text-[65px] text-[40px] text-[#000000] xs:leading-[76.8px] leading-[66.8px] w-full">
              Nuestro ecosistema <br className="sm:block hidden"/> 
              de inversiones </h2>
            <div className="grid md:grid-cols-2">
              <div className={styles.paddingX}>
                  <img src={bursatil01} alt="bursatil01" className="h-24 w-48 object-contain" />
                  <p className="font-inter font-normal text-[#000000] text-[15px] leading-[20px] max-w-[470px] mt-3">
                  Everdom gestionará tu capital y te hará llegar un reporte mensual
                  con el detalle de los rendimientos generados. Al contar con tu
                  capital en cuenta propia, nuestro Broker se encargará de
                  dispersar los rendimientos correspondientes, donde te
                  corresponderá del 40% al 50%* y el resto lo dispersará a Everdom,
                  tu gestor de capital. 
                  </p>
                  <p className="font-inter font-normal text-[#000000] text-[15px] leading-[20px] max-w-[470px] mt-3">
                  Para nosotros es muy importante la transparencia, por esto
                  ponemos a tu disposición una plataforma donde podrás ver en
                  vivo el crecimiento de tu capital. También podrás aumentar o
                  retirar tu dinero en el momento que deseés.
                  </p>
              </div>
              <div className={`${styles.paddingX} place-content-end`}>
                  <img src={recursos02} alt="recursos02" className="h-24 w-52 object-contain"/>
                  <p className="font-inter font-normal text-[#000000] text-[15px] leading-[20px] max-w-[470px] mt-3">
                  Podrás tener propiedad parcial o total de una o más
                  propiedades y desarrollos generando un ingreso adicional
                  para ti, ya sea por concepto de arrendamiento o por venta
                  del inmueble.
                  </p>
              </div>
            </div>


            <div className="grid md:grid-cols-2">
              <div className={styles.paddingX}>
                  <img src={franquicias03} alt="franquicias03" className="h-24 w-52 object-contain mt-8 mb-8" />
                  <p className="font-inter font-normal text-[#000000] text-[15px] leading-[20px] max-w-[470px] mt-3">
                  Everdom gestionará tu capital y te hará llegar un reporte mensual
                  con el detalle de los rendimientos generados. Al contar con tu
                  capital en cuenta propia, nuestro Broker se encargará de
                  dispersar los rendimientos correspondientes, donde te
                  corresponderá del 40% al 50%* y el resto lo dispersará a Everdom,
                  tu gestor de capital. 
                  </p>
                  <p className="font-inter font-normal text-[#000000] text-[15px] leading-[20px] max-w-[470px] mt-3">
                  Para nosotros es muy importante la transparencia, por esto
                  ponemos a tu disposición una plataforma donde podrás ver en
                  vivo el crecimiento de tu capital. También podrás aumentar o
                  retirar tu dinero en el momento que deseés.
                  </p>
              </div>
              <div className={`${styles.paddingX} place-content-end`}>
                  <img src={startup04} alt="startup04" className="h-36 w-80 object-contain" />
                  <p className="font-inter font-normal text-[#000000] text-[15px] leading-[20px] max-w-[470px] mt-3">
                  Podrás tener propiedad parcial o total de una o más
                  propiedades y desarrollos generando un ingreso adicional
                  para ti, ya sea por concepto de arrendamiento o por venta
                  del inmueble.
                  </p>
              </div>
            </div>
        </div>

    </section>
  )
}

export default Ecosystem

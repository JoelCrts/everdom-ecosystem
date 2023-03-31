import React from 'react'
import { facebook, instagram, linkedin, logoBlanco2, twitter } from "../assets";
import { socialMedia } from '../constants';
import styles from '../style';
import '../constants/index'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logoBlanco2} alt="logoBlanco" className="w-[266px] h-[72px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Un ciclo que prevalece, <br />se renueva.</p>
        </div>

        <div className="flex-[1.5] w-full flex md:justify-end flex-wrap md:mt-0 mt-10 pt-5">
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
               <h4 className="font-roboto font-medium text-[18px] leading[27px] text-white">
                  Contáctanos
               </h4>
               <ul className="list-none mt-4">
                    <li className="font-inter font-normal text-[16px]
                    leading-[24px] text-dimWhite hover:text-[#A9F6BD] cursor-pointer">
                      <a href="">contacto@everdom.mx</a>
                    </li>
                    <li className="font-inter font-normal text-[16px]
                    leading-[24px] text-dimWhite hover:text-[#A9F6BD] cursor-pointer">
                      <a 
                      href="https://wa.me/523323329221?text=Hola,%20me%20interesa%20obtener%20más%20información" 
                      target="_blank">
                        +52 33 2332 9221</a>
                    </li>
               </ul>
            </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className="font-inter font-normal text-center text-[18px] leading[27px] text-white">
          2023 Everdom. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6 gap-6">
          <a href="https://www.instagram.com/everdom.ei/" target="_blank" classname="w-[21px] h-[21px] object-contain cursor-pointer">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="">
            <img src={facebook} alt="facebook" target="_blank" classname="w-[21px] h-[21px] object-contain cursor-pointer"/>
          </a>
          <a href="">
            <img src={twitter} alt="twitter" target="_blank" classname="w-[21px] h-[21px] object-contain cursor-pointer"/>
          </a>
          <a href="">
            <img src={linkedin} alt="linkedin" target="_blank" classname="w-[21px] h-[21px] object-contain cursor-pointer mr-0"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer

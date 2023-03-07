import React from 'react';
import styles from '../style';
import { everdomIcon } from '../assets';

const Hero = () => {
  return (
    <section id="home" className="justify-between columns-2 flex md:flex-row flex-col py-2">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-16 pl-6 pr-2`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-roboto font-semibold ss:text-[65px] 
            text-[50px] text-white ss:leading-[100px] leading-[75px]">
            Así como un río <br className="sm:block hidden"/> {" "}
            sigue su ciclo. <br className="sm:block hidden"/> {" "}
            <span className="text-[#A9F6BD]">
              Nosotros también.
            </span> 
          </h1>
        </div>
        <div row-span-2>
            <p className="font-roboto font-light text-[#FFFF] text-[20px] leading-[30px] max-w-[550px] mt-5">
            La naturaleza de los ecosistemas cíclicos es fascinante: lo vemos
            en las cadenas alimenticias, la reproducción o incluso con los aros
            de las vetas en los árboles, todas traen bondades de forma natural
            en repetición, una y otra vez, creando un ciclo que trae estabilidad 
            y abundancia a todo lo que involucra. Lo mismo ocurre al invertir 
            correctamente, se convierte en un ciclo que prevalece y enverdece 
            lo que toca a su paso.
            </p>
        </div>
      </div>
        <div className={`${styles.paddingY} justify-center sm:mx-4 sm:flex-row`}>
           <img src={everdomIcon} alt="everdomIcon" className="flex-1 max-w-[375px] max-h-[375px] mr-7 ml-3 justify-center z-10"/>
        </div>

    </section>
  )
}

export default Hero

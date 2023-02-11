import React from 'react'
import styles from '../style';
import { everdomIcon } from '../assets';

const Hero = () => {
  return (
    <section id="home" className="justify-between flex md:flex-row flex-col py-2">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

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
        <div>
            <p className="font-roboto font-light text-dimWhite text-[20px] leading-[30px] max-w-[550px] mt-5">
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
        <div className={`${styles.padding} items-center sm:flex-row`}>
           <img src={everdomIcon} alt="everdomIcon" className="w-[382px] h-[382px] z-[5]"/>
        </div>

    </section>
  )
}

export default Hero
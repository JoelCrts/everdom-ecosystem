import React from 'react'
import styles from '../style'
import Button from './Button'

const Clients = () => {
  return (
    <section id="contacto" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col
    bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className="font-roboto font-semibold xs:text-[65px] text-[40px] text-[#FFFF] xs:leading-[76.8px] leading-[66.8px] w-full">Únete al Everdom</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            La solidez de tu futuro la decides tú, elige crecer con nosotros.
          </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-2 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default Clients

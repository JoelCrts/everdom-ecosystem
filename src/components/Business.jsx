import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard =({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.lenght -1 ? "mb-6" : "mb-0"} hover:bg-[#A9F6BD]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-roboto font-semibold text-[#000000] text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-inter font-normal text-[#000000] text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} ${styles.padding}`}>
        <h2 className={`${styles.heading2} text-[#000000]`}>Inversiones que <br className="sm:block hidden"/> 
        se renuevan.</h2>
        <p className={`${styles.paragraph} text-[#000000] max-w-[530px] mt-5`}>
        Somos un ecosistema que ofrece una diversa variedad
        de sectores de inversión; desde una primera aportación
        puedes generar rendimientos que a largo plazo darán forma a otros
        proyectos, reinvertirtiendo en diferentes sectores financieros.</p>
      </div>

      <div className={`${layout.sectionImg} ${styles.paddingX} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business

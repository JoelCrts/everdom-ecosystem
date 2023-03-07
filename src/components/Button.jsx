import React from 'react'

const Button = ({ styles }) => {
  return (
    <a 
    href="https://wa.me/523323401341?text=Hola,%20me%20interesa%20obtener%20más%20información" 
    target="_blank">
      <button type="button" className={`py-6 px-16 bg-[#A9F6BD] font-roboto
      font-medium text-[24px] text-primary outline-none ${styles} rounded-[10px]`}>
          Inicia hoy
      </button>
    </a>
  )
}

export default Button

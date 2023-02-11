import React from 'react'
import { productosEverdom } from "../assets";
import styles from '../style';

const Products = () => {
  return (
    <div className="w-full h-full">
      <div className={`${styles.paddingY}`}>
        <img src={productosEverdom} alt="productos" className="self-start"/>
      </div>
    </div>
  )
}

export default Products

import react from 'react'
import styles from './style';
import { Navbar, Hero, Products, Clients, Business, Footer, Ecosystem } from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`} >
        <div className={`${styles.boxWidth} pt-8 pb-36`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart}`} >
        <div> 
         <div className="bg-[#FFFF] w-full">
              <div className="pt-24">
              <Business /></div>
            <div className="bg-contain mt-24 pb-0 mb-0 bg-no-repeat bg-right-bottom bg-[url('/src/assets/graficaCurva01.png')]">
              <Ecosystem /></div >
            <div className="pb-24 pt-24">
              <Products /></div>
         </div>
         
         <div className={`${styles.padding} bg-primary`}>
          <Clients />
          <Footer />
         </div>
        </div>
      </div>

    </div>
  )
}

export default App

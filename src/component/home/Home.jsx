import './Home.css'
import picture from '../../asserts/logo.png'
import picture1 from '../../asserts/1.png'
import picture2 from '../../asserts/2.png'
import picture3 from '../../asserts/3.png'
import { Phone, FacebookLogo, Globe } from 'phosphor-react'

const Home = () => {
  return (
    <div className='home'>
      <img src={picture} alt="" className='logo'/>
      <div className="collection">
        <div className="left">
            <img src={picture1} alt="" />
        </div>
        <div className="right">
            <p className='main'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul className='list'>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src={picture2} alt="" />
            <p style={{textAlign: "left"}} className='font'>Government of India has awarded the <span className='bold'><b>"National Energy Conservation Award 2018"</b></span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div className="container">
        <p style={{textAlign: "left"}} className='font'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={picture3} alt="" />
        <p className='font'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      <hr color='red'/>
      <div className="paragraph">
        <p className='font'><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
        <p className='font'>CHEMICALS & PROCESS <span className='diversion'>|</span> POWER <span className='diversion'>|</span> WATER & WASTE WATER <span className='diversion'>|</span> OILS & GAS <span className='diversion'>|</span> PHARMA <span className='diversion'>|</span> SUGARS & DISTILLERIES <span className='diversion'>|</span> PAPER & PULP <span className='diversion'>|</span> MARINE & DEFENCE <span className='diversion'>|</span> METAL & MINING <span className='diversion'>|</span> FOOD & BEVERAGE <span className='diversion'>|</span> PETROCHEMICAL & REFINERIES <span className='diversion'>|</span> SOLAR <span className='diversion'>|</span> BUILDING <span className='diversion'>|</span> HVAC <span className='diversion'>|</span> FIRE FIGHTING <span className='diversion'>|</span> AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className="footer">
        <span className='font'><Phone className='phone' size={22}/>Toll free 1800 200 1234</span>
        <span className='font'><FacebookLogo size={32} className='facebook'/>www.facebook.com/cripumps</span>
        <span className='font'><Globe size={32} className='globe'/>www.crigroups/com</span>
      </div>  
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faLocationDot} from '@fortawesome/free-solid-svg-icons'
import{faInstagram,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <>
      <div className='container-fluid pt-5 bg-light'>
        <div className="row pt-5">
          <div className="col-md-2 d-flex justify-content-center pe-5 pe-md-0">
            <div className='pt-4'><img src="./images/footerlogo.png" alt="" width={'120px'} height={'60px'} /></div>
          </div>
          <div className="col-md-1 d-flex justify-content-center">
            <div className='pt-4'>
              <p className='' style={{color:"white",fontSize:"13px"}}>KFC India</p>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>About KFC</p></Link>
              <Link to={'/'} className=' text-decoration-none ' style={{color:"white",fontSize:"13px"}}><p>KFC Care</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Careers</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Our Golden Past</p></Link>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center ps-5 ps-md-0">
            <div className='pt-4'>
              <p className='' style={{color:"white",fontSize:"13px"}}>Legal</p>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Terms and Conditions</p></Link>
              <Link to={'/'} className=' text-decoration-none ' style={{color:"white",fontSize:"13px"}}><p>Privacy Policy</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Disclaimer</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Caution Notice</p></Link>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center ps-5 ps-md-0">
            <div className='pt-4'>
              <p className='' style={{color:"white",fontSize:"13px"}}>KFC Food</p>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Menu</p></Link>
              <Link to={'/'} className=' text-decoration-none ' style={{color:"white",fontSize:"13px"}}><p>Order Lookup</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Gift Card</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Nutrition & Allergen</p></Link>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center">
           <div className='pt-4'>
              <p className='' style={{color:"white",fontSize:"13px"}}>Support</p>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Get Help</p></Link>
              <Link to={'/'} className=' text-decoration-none ' style={{color:"white",fontSize:"13px"}}><p>Contact Us</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>KFC Feedback</p></Link>
              <Link to={'/'} className=' text-decoration-none' style={{color:"white",fontSize:"13px"}}><p>Privacy Policy</p></Link>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center">
            <div className='pt-4'>
              <p><FontAwesomeIcon icon={faLocationDot} style={{color: "red",}}  className='me-2'/><Link className='' style={{color: "white",fontSize:"13px"}}>Find a KFC</Link></p>
            </div>
           
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className='pt-4 bg-light'>
              <img src="./images/plays.png" alt="" width={'270px'} height={'40px'}/>
            </div>
          </div>
        </div>

        <div className='row pb-3  mt-5 pt-5 '>
          <div className="col-md-2"></div>
          <div className='col-md-8'>
            <div className='text-center' style={{fontSize:"13px"}}>
              <p >Copyright © KFC Corporation 2024 All rights reserved</p>
              
            </div>
          </div>
          <div className="col-md-2">
            <div className='d-flex justify-content-center me-md-5'>
                <div className='me-3 border rounded-5 d-flex justify-content-center align-items-center ' style={{width:"35px",height:"35px"}}>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              
                <div className='me-3 border rounded-5 d-flex justify-content-center align-items-center ' style={{width:"35px"}}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
               
    
                <div className='me-3 border rounded-5 d-flex justify-content-center align-items-center ' style={{width:"35px"}}>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
               
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
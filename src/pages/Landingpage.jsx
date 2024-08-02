import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/1.webp'
import Image2 from '../assets/2.webp'
import Image3 from '../assets/3.webp'
import { Link } from 'react-router-dom';
import line from '../assets/line.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot,faClock,faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"
import c5 from "../images/c5.jpg"
import c6 from "../images/c6.jpg"
import c7 from "../images/c7.jpg"
import c8 from "../images/c8.png"
import f1 from "../images/f1.jpg"
import f2 from "../images/f2.jpg"
import f3 from "../images/f3.jpg"
import f4 from "../images/f4.jpg"
import line1 from "../images/line.png"




function Landingpage() {
  const [index, setIndex] = useState(0);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, paddingRight:'20px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
  


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <>
      <div className="container-fluid bg-light ">
        <div className='d-flex justify-content-center align-items-center py-2' style={{fontSize:"15px"}}>
          <p className='pt-3' style={{color:"white"}}><FontAwesomeIcon icon={faLocationDot} className='text-danger me-2' />Pick up at: KFC Cochin-Kakkanad<FontAwesomeIcon icon={faClock} className='text-danger ms-3 me-2' />ASAP</p>
          <button className='btn btn-outline-dark mx-3 rounded-5 ' style={{color:"grey", fontSize:"15px" }}>change</button>
        </div>
       
      </div>

      <div className="container-fluid" style={{backgroundColor:"white"}}>
        <div className='d-flex justify-content-center align-items-center'><img src={line} alt="" width={'60px'} height={'40px'} /></div>
        <div className="row p-3">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p className='text-center pb-1 fw-bolder' style={{color:"black",fontSize:"20px"}}>SELECT YOUR ORDER TYPE TO START</p>
            <div className=' rounded-5 d-flex justify-content-between w-100 py-1 my-4 fw-bolder' style={{backgroundColor:"lightgrey"}}>
              <Link className='ms-5 text-decoration-none d-flex justify-content-center align-items-center' style={{color:"grey"}}>DELIVERY</Link> 
              <button className='btn btn-danger rounded-5 px-5'>PICKUP</button>
              <Link className='me-5 text-decoration-none d-flex justify-content-center align-items-center' style={{color:"grey"}}>DINE</Link>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <Carousel>
          <Carousel.Item interval={1000}>
            <img src={Image1} alt="" />
            
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={Image2} alt="" />
            
          </Carousel.Item>
          <Carousel.Item>
            <img src={Image3} alt="" />
            
          </Carousel.Item>
      </Carousel>

      <div className="container-fluid pb-5" style={{backgroundColor:"white"}}>
        <div className="row p-5">         
          <div className="col-md-2"></div>
          <div className="col-md-10 pe-5" >
            <h4 className='text-light py-5'>BROWSE CATEGORIES</h4>
            <div className="row py-3">
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}>
                  <Card.Img variant="top" src={c1} />
                  <Card.Body>
                    <Card.Text className='text-light fw-bolder text-center'>
                      INTERNATIONAL BURDER..
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}>
                  <Card.Img variant="top" src={c2} />
                  <Card.Body>
                    <Card.Text className='text-light fw-bolder text-center'>
                      KFC LUNCH SPECIALS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}>
                  <Card.Img variant="top" src={c3} />
                  <Card.Body>
                    <Card.Text className='text-light fw-bolder text-center'>
                      BOX MEALS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}>
                  <Card.Img variant="top" src={c4} />
                  <Card.Body>
                   <Card.Text className='text-light fw-bolder text-center'>
                      BURGERS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="row py-md-3 my-md-3">
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}>
                  <Card.Img variant="top" src={c5} />
                  <Card.Body>
                    <Card.Text className='text-light fw-bolder text-center'>
                      CHICKEN BUCKETS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}>
                  <Card.Img variant="top" src={c6} />
                  <Card.Body>
                    <Card.Text className='text-light fw-bolder text-center'>
                      RICE BOWLZ
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}>
                  <Card.Img variant="top" src={c7} />
                  <Card.Body>
                    <Card.Text className='text-light fw-bolder text-center'>
                      NEW CHICKEN ROLLS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 my-3">
                <Card style={{ width: '100%',backgroundColor:"whitesmoke" }}  >
                  <Card.Img variant="top" src={c8} height={'162px'}  className='p-4'/>
                  <Card.Body>
                   <Card.Text className='text-light text-center'>
                      <p>View All Menus <FontAwesomeIcon icon={faArrowRightLong} className='me-2' /></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-5 bg-light">
        <div className="row">  
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <img src={line1} alt="" width={'80px'} height={'60px'} className='ps-md-4'/>
            <div className='d-flex justify-content-between py-5 pe-md-5 me-md-5'>
              <h4 className='pe-5 ps-md-4' style={{color:"white"}}>EXCLUSIVE OFFERS FOR YOU</h4>
              <p className='me-md-5'>View All Menus <FontAwesomeIcon icon={faArrowRightLong} className='ms-2' /></p>
            </div>
            <div className="slider-container bg-light p-md-4 p-5">
              <Slider {...settings} style={{color:"white"}} className=''>
                <div className=''>
                      <Card style={{ width: '20rem',backgroundColor:"white",height:"450px" }}>
                        <Card.Img variant="top" src={f1} height={'250px'}/>
                        <Card.Body>
                          <h4 className='text-center text-danger fw-bold fs-4'>FREE CHICKEN...</h4>
                          <Card.Text style={{fontSize:"13px",color:"black"}}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <div className='d-flex justify-content-between'>
                            <Link style={{fontSize:"12px"}} className='text-light d-flex justify-content-center align-items-center'>View Details</Link>
                            <Button style={{backgroundColor:"white",color:"black",fontSize:"12px"}} className='btn btn-outline-light rounded-5 px-5 py-3 fw-medium'>Apply Offer</Button>
                          </div>
                        </Card.Body>
                      </Card>       
                </div>
                <div className=''>
                      <Card style={{ width: '20rem',backgroundColor:"white",height:"450px" }} >
                        <Card.Img variant="top" src={f2} height={'250px'}/>
                        <Card.Body>
                          <h4 className='text-center text-danger fw-bold fs-4'>UPTO RS 100 OFF</h4>
                          <Card.Text style={{fontSize:"13px",color:"black"}}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <div className='d-flex justify-content-between'>
                            <Link style={{fontSize:"12px"}} className='text-light d-flex justify-content-center align-items-center'>View Details</Link>
                            <Button style={{backgroundColor:"white",color:"black",fontSize:"12px"}} className='btn btn-outline-light rounded-5 px-5 py-3 fw-medium'>Apply Offer</Button>
                          </div>
                        </Card.Body>
                      </Card>
                </div>
                <div className=''>
                      <Card style={{ width: '20rem',backgroundColor:"white",height:"450px" }} >
                        <Card.Img variant="top" src={f3} height={'250px'}/>
                        <Card.Body>
                          <h4 className='text-center text-danger fw-bold fs-4'>ADD 2 PC HOT N..</h4>
                          <Card.Text style={{fontSize:"13px",color:"black"}}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <div className='d-flex justify-content-between'>
                            <Link style={{fontSize:"12px"}} className='text-light d-flex justify-content-center align-items-center'>View Details</Link>
                            <Button style={{backgroundColor:"white",color:"black",fontSize:"12px"}} className='btn btn-outline-light rounded-5 px-5 py-3 fw-medium'>Apply Offer</Button>
                          </div>
                        </Card.Body>
                      </Card>
                </div>
                <div className=''>
                      <Card style={{ width: '20rem',backgroundColor:"white",height:"450px" }}>
                        <Card.Img variant="top" src={f4} height={'250px'}/>
                        <Card.Body>
                          <h4 className='text-center text-danger fw-bold fs-4'>UPTO RS 100 OFF</h4>
                          <Card.Text style={{fontSize:"13px",color:"black"}}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <div className='d-flex justify-content-between'>
                            <Link style={{fontSize:"12px"}} className='text-light d-flex justify-content-center align-items-center'>View Details</Link>
                            <Button style={{backgroundColor:"white",color:"black",fontSize:"12px"}} className='btn btn-outline-light rounded-5 px-5 py-3 fw-medium'>Apply Offer</Button>
                          </div>
                        </Card.Body>
                      </Card>
                </div>
              </Slider>
            </div>                            
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Landingpage
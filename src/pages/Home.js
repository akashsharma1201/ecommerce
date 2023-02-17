import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css";
import menImage from "../assets/homePageMenImage.jpg"
import womenImage from "../assets/homePageWomenImage.jpg"
 
const Home = () => {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 3
  // };

  return (
    <div className='homepage-wrapper'>
      <div className='banner-image-box'>
        <img alt="image4" src="https://t4.ftcdn.net/jpg/03/36/15/67/240_F_336156751_XY1xfHvk9yl44dRS8opQeeexqvsebzby.jpg" />
      </div>
      <div style={{backgroundColor:"yellow"}} className="py-3"><h1 className='text-center'>WHO ARE YOU <span className='text-danger'>SHOPPING</span> FOR?</h1></div>
      <div className='image-wrapper'>
        {/* <img className='img-fluid' src='https://nareshrajput-sports-site.vercel.app/static/media/men.2c476ddd7c346db3e9e3.jpg' /> */}
        <img className='img-fluid' alt="image5" src={menImage} />
        <div className='text'>
          <h3>MEN</h3>
          <NavLink to="/men"><button>SHOP NOW</button></NavLink>
          
        </div>
      </div>
      <div className='image-wrapper'>
        {/* <img className='img-fluid' src='https://nareshrajput-sports-site.vercel.app/static/media/women.94aab05b15b54df3ceb8.jpg' /> */}
        <img className='img-fluid' alt="image6" src={womenImage} />
        <div className='text'>
          <h3>WOMEN</h3>
          <NavLink to="/women"><button>SHOP NOW</button></NavLink>
          
        </div>
      </div>
    </div>
  )
}

export default Home
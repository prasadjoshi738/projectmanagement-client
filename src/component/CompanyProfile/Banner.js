import React from 'react'
import one from "../../Ador/1.jpg";
import four from "../../Ador/4.jpg";
import five from "../../Ador/5.jpg";
import six from "../../Ador/6.jpg";
import seven from "../../Ador/7.jpg";
import nine from "../../Ador/9.jpg";
import ten from "../../Ador/10.jpg";
import fourteen from "../../Ador/14.jpg";
import "./Banner.css"


const Banner = () => {
  return (
   <><div  style={{marginLeft:50,marginTop:20, width:"850px"}} id="carouselExampleControls" class="carousel slide " data-ride="carousel" >
   <div class="carousel-inner" style={{borderRadius:15,border:"4px solid black"}}>
     <div class="carousel-item active">
       <img class="d-block  fit" src={one} alt="First slide"/>
     </div>
     <div class="carousel-item">
       <img class="d-block fit" src={four} alt="Second slide"/>
     </div>
     <div class="carousel-item">
       <img class="d-block fit" src={five} alt="Third slide"/>
     </div>
     <div class="carousel-item">
       <img class="d-block fit" src={six} alt="Third slide"/>
     </div>
     <div class="carousel-item">
       <img class="d-block fit " src={seven} alt="Third slide"/>
     </div>
     <div class="carousel-item">
       <img class="d-block fit " src={nine} alt="Third slide"/>
     </div>
     <div class="carousel-item">
       <img class="d-block fit" src={ten} alt="Third slide"/>
     </div>
     <div class="carousel-item">
       <img class="d-block fit " src={fourteen} alt="Third slide"/>
     </div>
   </div>
   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Previous</span>
   </a>
   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="sr-only">Next</span>
   </a>
 </div></>
  )
}

export default Banner
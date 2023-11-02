import React from "react";
import oposkula from "./../../assets/oposkula.png"
import registerPage from "./../../assets/registerPage.png"
import vitaminatPage from "./../../assets/vitaminatPage.png"
import movieDB from "./../../assets/movieDB.png"
import goals from "./../../assets/goals.png"
import mealsPage from "./../../assets/mealsPage.png"
import mealsHome from "./../../assets/mealsHome.png"
import addMeal from "./../../assets/addMeal.png"
import "./Carousel.css"

// const imagesForCarousel = [
//   {src: registerPage, alt:"Register Page"},
//   {src: vitaminatPage, alt:"VitaminaT Page"},
//   {src: oposkula , alt:"Oposkula Page"},
//   {src: movieDB , alt:"MovieDB"},
//   {src: goals , alt:"Goals"},
//   {src: mealsPage, alt:"Meals Page"},
//   {src: mealsHome, alt:"Meals Home"},
//   {src: addMeal, alt:"Add Meal Page"}
// ]

const Carousel = () => {

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade container">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={registerPage} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item ">
        <img src={oposkula} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item ">
        <img src={vitaminatPage}  className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item ">
        <img src={registerPage} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item ">
        <img src={vitaminatPage} className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    // <div
    //   id="carouselExampleControls"
    //   className="carousel slide container"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner">
    //     {imagesForCarousel.map((image, index) => (
    //       <div
    //         key={index}
    //         className={`carousel-item${index === 0 ? " active" : ""}`}
    //       >
    //         <img src={image.src} className="w-100" alt={image.alt} />
    //         <div className="carousel-caption d-none d-md-block"></div>
    //       </div>
    //     ))}
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};
  

   


export default Carousel
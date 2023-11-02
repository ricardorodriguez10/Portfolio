import React from "react";
import { Link } from "react-scroll"
import "./Navbar.css"

const Navbar = () => {
    return (

       <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">RickyDev</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
      </button>
     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div class="navbar-nav">
         <Link className="nav-link active" to="page-top" smooth={true} duration={1000}>Home</Link>
         <Link className="nav-link active" to="about" smooth={true} duration={1000}>About Me</Link>
         <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
         <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
       </div>
     </div>
   </div>
 </nav>
    )
}

export default Navbar;

 // <header id="header">
      //   <div className="row">
      //     <div className="col-12">
      //       <a id="Rickydev" className="Rickydev" href="/"></a>

      //       <nav>
      //         <ul id="nav">
      //           <li className="page-item">
      //           <a href="#">Home</a>
      //           </li>
      //           <li className="page-item">
      //           <a href="#">About Me</a>
      //           </li>
      //           <li className="page-item">
      //           <a href="#">Projects</a>
      //           </li>
      //           <li className="page-item">
      //           <a href="#">Contac</a>
      //           </li>
               
      //         </ul>
      //       </nav>



      //     </div>
      //   </div>
      // </header>

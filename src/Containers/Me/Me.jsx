import React from "react"
import Ricardo from "../../assets/Ricardo.jpg"
import "./Me.css"

const Me = () => {
    return (
        <section className="myDescription">
            <div className="row">
            <div className="col-12">
            <div id="" className="face">
            <a href="#">
                <div id="" className="nutritionist">
                    <div id="" className="nutritionist-description">
                    <h1>Sports Nutritionist</h1>
                    <p> nutritionist with a passion for technology</p>
                    </div>
                </div>
            </a>
           <a href="#">
            <div id="" className="frontend-developer">
            <div id="" className="frontend-description">
                <h1>
                <span> Front-end Developer </span>
                </h1>
                <p>Front end developer who writes clean, elegant and efficient code</p>
            </div>
            
            </div>

           </a>

           <img src={Ricardo} className="face-img" alt="me"></img>

            
            </div>

            </div>
                
            </div>
        </section>
    )
}


export default Me;
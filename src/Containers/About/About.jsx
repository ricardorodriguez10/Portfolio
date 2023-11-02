import React from "react";
import "./About.css"

const About = () => {
return (
    <section id="about" className="aboutMe">
        <div className="row">
            <div className="col-12">
                <div className="aboutMe-container">
                    <div className="aboutMe-text">
                        <div className="aboutMe-description">
                            <h1>About Me</h1>
                            <br></br>
                            <p>My name is Ricardo, but you can call me Ricky. I am from Mexico City and I have lived in Spain for 5 years. I currently live in Barcelona because I got a job here as a frontend developer in a german company.</p>
                            
<p>I actually studied a bachelor's degree in human nutrition at the Metropolitan Autonomous University (UAM) in Mexico and then I did my master's degree in Sports Nutrition at the Real Madrid University - European University of Madrid (UEM).
But my passion for technology led me to study programming and I discovered a new world that I immediately fell in love with.</p>
<br></br>
<p>As a front-end developer I have done many projects that you can see here or on my github.
I am a person who likes to constantly learn something as you can see, I also like to go to the gym in the mornings, read about stoic philosophy, and although I am a nutritionist I like serrano ham as well, I live in Spain, what can I do?</p>
                        </div>
                    </div>

<div className="aboutMe-skills">
    <h2>My Skills</h2>

    <div className="skills-images">

    <div className="skills">
        <span title="html">
            <a href="">
                <img className="front-skills" src="data:image/png;base64,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" alt="html"></img>
            </a>
        </span>
   


     <span title="css">
            <a href="">
                <img className="front-skills" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="css"></img>
            </a>
        </span>
    
  
        <span title="javascript">
            <a href="">
                <img className="front-skills" src="https://emaillistvalidation.com/blog/content/images/2023/10/JavaScript-Symbol-1.png" alt="javascript"></img>
            </a>
        </span>
     
        <span title="react">
            <a href="">
                <img className="front-skills" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react"></img>
            </a>
        </span>
   
   
        <span title="vue">
            <a href="">
                <img className="front-skills" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="vue"></img>
            </a>
        </span>
   
   
        <span title="NodeJs">
            <a href="">
                <img className="front-skills" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="NodeJs"></img>
            </a>
        </span>
   

   
        <span title="Git">
            <a href="">
                <img className="front-skills" src="data:image/png;base64,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" alt="Git"></img>
            </a>
        </span>
    

    
        <span title="Github">
            <a href="">
                <img className="front-skills" src="https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png" alt="Github"></img>
            </a>
        </span>
   


    
        <span title="Postman">
            <a href="">
                <img className="front-skills" src="https://www.sngular.com/wp-content/uploads/2021/12/postman-logo-vert-2018.jpg" alt="Postman"></img>
            </a>
        </span>
   

    </div>
    </div>
</div>

                </div>
            </div>
        </div>
    </section>)
}

export default About;
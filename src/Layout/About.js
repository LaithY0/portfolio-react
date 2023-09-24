import logo from '../img/logo.png';
import myimg from '../img/me.png';


function About () {


        return(
                 
            <div>


<section id="home">


<div id="divimg">
 <img src={myimg} alt="me" id="myimg" />


</div>



<div id="divme">
 <h1>Laith Ahmad Yaseen</h1>
 <p>Full Stack Web Developer & Artificial Intelligence</p>
 <p>I have many experiences in programming languages and web design </p>

 <button id="cv" > <a href="../cv.pdf" download style= {{color: '#ffffff'}}> Download CV </a>
  
 </button>
</div>


<div >
 <img src={logo} alt="logo" id="logom" />
</div>

</section>
<br/>

<hr id="hr1" />


            </div>
    
        )
    
}

export default About;
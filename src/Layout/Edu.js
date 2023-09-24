import b from '../img/b.jpg';
import a from '../img/a.jpg';


function Edu () {


        return(
                 
            <div>


<h2>Education</h2>
<article id="Education">
 


    <section id="unvimg">
      

      <div><img src={b} alt="unv" className="eimg" /></div>
      <div>
        <h3>Aqaba University Of Technology</h3>
        <p>Department : Artificial Intelligence</p>
        <p>2020 - Until Now</p>
        <button id="btna" >
          <a href="http://www.aut.edu.jo/en" target="_blank">Vist Aqaba University Of Technology</a> 
        </button>
      </div>

    </section>


    <section id="orangeimg">


      <div><img src={a} alt="orange" className="eimg" /></div>
      <div>
        <h3>Orange Coding Academy</h3>
        <p>Full Stack Web Developer </p>
        <p> 4-6-2023 - Until Now</p>
        <button id="btno">
          <a href="https://yo.orange.jo/orange-coding-academy" target="_blank"> Vist Orange Coding Academy</a> 
        </button>
      </div>
    </section>
  </article>

  <hr id="hr2" />



            </div>
    
        )
    
}

export default Edu;
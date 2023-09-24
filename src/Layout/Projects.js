import p1 from '../img/p1.PNG';
import p2 from '../img/p2.PNG';
import kk from '../img/kk.PNG';


function Projects () {


        return(
                 
            <div>

                
<h2>Projects</h2>

<article id="projects">

  
  <section id="orangeimg">


    <div><img src={p2} alt="orange" className="eimg" /></div>
    <div>
      <h3>Mini Project 2 </h3>
      <p> 1-7-2023 </p>
      <button id="btno">
        <a href="https://laithy0.github.io/Minproject2/project_1/pro1.html" target="_blank">click here to see the project</a>
      </button>
    </div>
  </section>


  
  <section id="orangeimg">


    <div><img src={kk} alt="orange" className="eimg" /></div>
    <div>
      <h3>HTML-CSS Task </h3>
      <p> 12-6-2023 - 1-7-2023</p>
      <button id="btno">
        <a href="https://laithy0.github.io/Html_Css_task/" target="_blank">click here to see the Tasks</a>
      </button>
    </div>
  </section>



  <section id="orangeimg">

    <div><img src={p1} alt="orange" className="eimg" /></div>
    <div>
      <h3>Mini Project 1 </h3>
      <p> 20-6-2023</p>
      <button id="btno">
        <a href="https://laithy0.github.io/Html_Css_task/minP/min.html" target="_blank"> click here to see the project</a> 
      </button>
    </div>
  </section>
  
</article>

<hr id="hr5" />




            </div>
    
        )
    
}

export default Projects;
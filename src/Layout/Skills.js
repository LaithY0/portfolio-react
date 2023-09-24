import cpls from '../img/c++.png';
import css from '../img/css.png';
import html from '../img/html.png';
import py from '../img/py.png';
import c from '../img/c.png';



function Skills () {


        return(
                 
            <div>


<h2>Skills</h2>

<article id="skills">

  <section id="ssec">

    <div className="sdiv">
      <img src={cpls} alt="c++" className="simg" />
      <p>C++</p>

    </div>

    <div className="sdiv">
      <img src={c} alt="c#" className="simg" />
      <p>C#</p>

    </div>

    <div className="sdiv">
      <img src={html} alt="html" className="simg" />
      <p>HTML</p>

    </div>

    <div className="sdiv">
      <img src={css} alt="css" className="simg" />
      <p>CSS</p>

    </div>

    <div className="sdiv">
      <img src={py} alt="python" className="simg" />
      <p>Python</p>

    </div>


  </section>

</article>

<hr id="hr3" />


            </div>
    
        )
    
}

export default Skills;
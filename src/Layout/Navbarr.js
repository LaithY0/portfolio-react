import logo from '../img/logo.png';

function Navbarr () {


        return(
            

          <section id="sec1">


          <div id="logo">
            <img src={logo}   alt="logo" id="logoimg"/>
          </div>
            
          <div id="nav">
    
             <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item mr-3" >
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item mr-3">
                    <a className="nav-link active text-light" aria-current="page" href="#hr1">Education</a>
                  </li>
                  <li className="nav-item mr-3">
                    <a className="nav-link active text-light" aria-current="page" href="#hr2">Skills</a>
                  </li>
                  <li className="nav-item mr-3">
                    <a className="nav-link text-light" href="#hr3"> Experience</a>
                  </li>
                  <li className="nav-item mr-3">
                    <a className="nav-link text-light" href="#hr4">  Projects</a>
                  </li>
                  <li className="nav-item mr-3">
                    <a className="nav-link text-light" href="#fsec2"> Contact Me</a>
                  </li>
              
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item text-light"  href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                
                </ul>
               
              </div>
            </div>
          </nav>
    
          </div>
    
        </section>
    
        )
    
}

export default Navbarr;
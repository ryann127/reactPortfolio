function Navbar(props) {
    return(
        <header class="header">
          <h1>Ryann Goldberg</h1>
          <div>
          <ul>
                <li>
                    <a href="#About Me" onClick={()=>props.setCurrentPage("aboutme")}>About Me</a>
                </li>
                <li>
                    <a href="#Work" onClick={()=>props.setCurrentPage("work")}>Work</a>
                </li>
                <li>
                    <a href="#Resume" onClick={()=>props.setCurrentPage("resume")}>Resume</a>
                </li>  
                <li>
                    <a href="#Contact Me" onClick={()=>props.setCurrentPage("contact")}>Contact Me</a>
                </li>
              
          </ul>
          </div>
      </header>
    )
}

export default Navbar
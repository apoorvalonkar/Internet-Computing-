import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import blackhole from "./blackhole";
import supernova from "./supernova";
import browndwarf from "./browndwarf";


import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
    <div className="App">
      <header className="App-header">React App</header>
      <div className="wrapper">
        <div className="row">
          <div className="Main">
                <NavLink to="/blackhole"><h1>The Black Hole</h1></NavLink>
                <p>Summary</p>
                <p>
                A black hole is a region of spacetime exhibiting such strong gravitational effects that nothing not even particles and electromagnetic radiation such as light can escape from inside it.
                </p>
                <img src="http://discovermagazine.com/~/media/Images/Issues/2018/April/black-hole-1.jpg"></img>
                <Route path="/blackhole" component={blackhole}/>

                <NavLink to="/supernova"><h1>The supernova</h1></NavLink>
                <p>Summary</p>
                <p>
                Supernovae are more energetic than novae. In Latin, nova means "new", referring astronomically to what appears to be a temporary new bright star. Adding the prefix "super-" distinguishes supernovae from ordinary novae, which are far less luminous.
                </p>
                <img src="https://images.newscientist.com/wp-content/uploads/2017/12/07202610/gettyimages-85757442.jpg"></img>
                <Route path="/supernova" component={supernova}/>

                <NavLink to="/browndwarf"><h1>The Brown Dwarf</h1></NavLink>
                <p>Summary</p>
                <p>
                A brown dwarf is a type of substellar object occupying the mass range between the heaviest gas giant planets and the lightest stars, having a mass between approximately 13 to 75–80 times that of Jupiter, or approximately 2.5×1028 kg to about 1.5×1029 kg. 
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Artist%E2%80%99s_conception_of_a_brown_dwarf_like_2MASSJ22282889-431026.jpg"></img>
                <Route path="/browndwarf" component={browndwarf}/>
            </div>
            <div className="left">		
              <nav>
                <ul>
                  <li><a className="App-link" href="Home.html">Home</a></li>
                </ul>
              </nav>
            </div>
        </div>
    </div>
    <br></br>
    <footer className="footer"> 
    Posted by: Apoorva Lonkar <br></br>
    Copyright © HelloWord.com
    </footer>

  </div>
  </HashRouter>
    );
  }
}

export default App;

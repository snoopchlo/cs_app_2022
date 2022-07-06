import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

import "./App.css";

// import { Footer, Roadmap, Features, About, Header, Team, NFT, NFT2, NFT3, Contact, FAQ } from "../src/containers/index.js";
// import { CTA, Navbar, SideNavbar, Loader } from "./components/index.js";

import { Home, About, NFT } from "../src/containers/index.js";
import { Navbar, SideNavbar, Spaceship } from "../src/components/index.js";

class App extends React.Component {



  state = {
    isLoading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  render() {
    const { isLoading } = this.state;
    
    return <div>{isLoading ? <Spaceship /> 
    :  <>
    <div className="bg-circle1"></div>
    <div className="bg-circle2"></div>
        <ParallaxProvider>
          <section id="HEADER">
            <Navbar />
            <Home />
          </section>
          <section id="BODY">
            <SideNavbar />
            <About />
            <NFT />
          </section>
          <section id="FOOTER">
            footer
          </section>
        </ParallaxProvider>      
      </>
    }</div>;
  }
}

export default App;
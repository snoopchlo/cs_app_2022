import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';

import "./App.css";

// import { Footer, Roadmap, Features, About, Header, Team, NFT, NFT2, NFT3, Contact, FAQ } from "../src/containers/index.js";
// import { CTA, Navbar, SideNavbar, Loader } from "./components/index.js";

import { Home, About, NFT ,NFT2, NFT3, Team,  Roadmap,Contact, FAQ, Footer, Features, Welcome} from "../src/containers/index.js";
import { Navbar, SideNavbar, Spaceship, CTA } from "../src/components/index.js";

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
            <Navbar />
            <Home />
            <SideNavbar />
            <About />
            <Welcome />
            <NFT />
            <Features />

            <Roadmap />
            <NFT2 />
            <NFT3 />
            <CTA />
            <Team />
            <FAQ />
            <Contact />
            <Footer />
 
        </ParallaxProvider>      
      </>
    }</div>;
  }
}

export default App;
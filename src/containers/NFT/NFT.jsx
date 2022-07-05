import React from "react";
import "./NFT.css";
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import img1 from "../../assets/NFT-images/1657.png";
import img2 from "../../assets/NFT-images/1670.png";
import img3 from "../../assets/NFT-images/1680.png";
import img4 from "../../assets/NFT-images/1690.png";
import img5 from "../../assets/NFT-images/1697.png";
// import img6 from "../../assets/NFT-images/1702.png";


const NFT = () => {
  return (
    <AnimationOnScroll animateIn="animate__animated animate__fadeIn">
    <Parallax speed={-25}>
    <section className="NFT-section section__padding">
        <h1 className="section__title">KPOP101</h1>
        <h1 className="section__subtitle gradient__text">gulz collection</h1>
        <div className="NFT-images-container content__padding">
            <div>
                <img src={img1} className="img1 nft-img" alt="example test images nft"/>
            </div>
            <div>
                <img src={img2} className="img2 nft-img" alt="example test images nft"/>
            </div>
            <div>
                <img src={img3} className="img3 nft-img" alt="example test images nft"/>
            </div>
            <div>
                <img src={img4} className="img4 nft-img" alt="example test images nft"/>
            </div>
            <div>
                <img src={img5} className="img5 nft-img" alt="example test images nft"/>
            </div>
        </div>
        
    </section>
    </Parallax>
    </AnimationOnScroll>
  )
}

export default NFT;
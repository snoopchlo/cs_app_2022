import React from "react";
import "./NFT2.css";

import img1 from "../../assets/NFT-images/1657.png";
import img2 from "../../assets/NFT-images/1670.png";
import img3 from "../../assets/NFT-images/1680.png";
import img4 from "../../assets/NFT-images/1690.png";
import img5 from "../../assets/NFT-images/1697.png";
// import img6 from "../../assets/NFT-images/1702.png";


const NFT2 = () => {
  return (
    <div className="NFT2" data-scroll-section>
        <h1 className="nft-title gradient__text">boyz collection</h1>
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
        
    </div>
  )
}

export default NFT2;
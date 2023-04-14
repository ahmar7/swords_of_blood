import React, { useState } from "react";
import styles from "./banner.module.css"; 

import './custom.css'
import img from '../../images/home/hero3.webp'
let BannerVideo=()=> {
  
  const [isGreaterThan900px, setIsGreaterThan900px] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) { 
        setIsGreaterThan900px(true);
      } else { 
        setIsGreaterThan900px(false);
      }
    }
    console.log("isGreaterThan900px", isGreaterThan900px);
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
   <>
      {isGreaterThan900px && <video
        style={{ pointerEvents: "none" }}

        className={["image desk-only", styles.image].join(" ")}

        loop
        playsinline
      >
        <source src="/assets/video/hero3.webm" type="video/webm" />
        <source src="/assets/video/hero3.mp4" type="video/mp4" />
      </video>}
      <img className="mbl-only" src={img} alt="" />
       
   </>
  );
}
export default BannerVideo;
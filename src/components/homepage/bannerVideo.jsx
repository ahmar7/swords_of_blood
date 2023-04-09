import styles from "./banner.module.css"; 
import './custom.css'
import img from '../../images/home/hero3.webp'
let BannerVideo=()=> {
 
  
  return (
   <>
      <video
        id="autopl"
        style={{ pointerEvents: "none" }}
        muted={true}
        className={["image desk-only", styles.image].join(" ")}
        autoPlay
        loop
        playsinline
      >
        <source src="/assets/video/hero3.webm" type="video/webm" />
        <source src="/assets/video/hero3.mp4" type="video/mp4" />
      </video>
      <img className="mbl-only" src={img} alt="" />
       
   </>
  );
}
export default BannerVideo;
import styles from "./banner.module.css"; 
import './custom.css'
import img from '../../images/home/hero3.webp'
let BannerVideo=()=> {
  

  
  return (
   <>
    <div className="desk-only">
        <video
          style={{ pointerEvents: "none" }}

          className={["image desk-only", styles.image].join(" ")}
          autoPlay
          loop
          src="/assets/video/hero3.mp4"
          playsinline
        >
          {/* <source className="desk-only" src="/assets/video/hero3.webm" type="video/webm" />
        <source className="desk-only" src="/assets/video/hero3.mp4" type="video/mp4" /> */}
        </video>
    </div>
      <img className="mbl-only" src={img} alt="" />
       
   </>
  );
}
export default BannerVideo;
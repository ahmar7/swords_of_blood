import styles from "./banner.module.css";
import { useEffect } from "react";
let BannerVideo=()=> {
  const player = () => {
    let vid = document.getElementById('autopl');
   vid.setAttribute("muted","" )
  }
  useEffect(() => {
    player();
  }, []);
  return (
    <video
    id="autopl"
      style={{ pointerEvents: "none" }}
      muted={true}
      className={["image", styles.image].join(" ")}
      autoPlay
      loop
      playsinline
    >
      <source src="/assets/video/hero3.webm" type="video/webm" />
      <source src="/assets/video/hero3.mp4" type="video/mp4" />
    </video>
  );
}
export default BannerVideo;
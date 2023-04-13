import { useState } from "react";
import { importAllImages } from "../../functions/common";
import ReactPlayer from "react-player/youtube";
import styles from "./video.module.css";
import './custom.css'
import Video1 from '../../images/game-mode/1.mp4'
import Video2 from '../../images/game-mode/Monster Hunt.mp4'
import Video3 from '../../images/game-mode/PvP Mode.mp4'
export default function Video({ url, title, img, standard }) {
  const [start, setStart] = useState(false);
  const startHandler = () => {
    setStart(true);
  };
  const images = importAllImages();

  return (
    <>
      {title && <h1 className={styles.heading}>{title}</h1>}
      <div
        className={`${styles.videoContainer} ${standard && styles.standard}`}
      >
      <div className="game-flex">
      <div className="indiv-video">
            <video autoPlay muted loop playsInline  src={Video1}></video>
            <h1 className="vid-title">Compaign Mode</h1>
      </div>
      <div className="indiv-video">
            <video autoPlay muted  loop  playsInline  src={Video2}></video>
            <h1 className="vid-title">Monster Hunt</h1>

      </div>
      <div className="indiv-video">
            <video autoPlay muted loop playsInline  src={Video3}></video>
            <h1 className="vid-title">PvP Mode</h1>

      </div>
      </div>
        {/* {!start ? (
          <>
            <img
              loading="lazy"
              onClick={startHandler}
              src={images[img]}
              alt="thumbnail"
              className={styles.thumbnail}
            />
            <img
              loading="lazy"
              src={images["svg/youtube.svg"]}
              alt="youtube-button"
              className={styles.button}
            />
          </>
        ) : (
          <ReactPlayer
            playing
            url={url || "https://www.youtube.com/embed/ALD6wNdwvx4"}
            controls
          />
        )} */}
      </div>
    </>
  );
}

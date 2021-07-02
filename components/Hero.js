import Image from "next/image";
import styles from "./Hero.module.scss";
import background from "../public/images/clubhbar-hashgraph-bg.svg";
import logo from "../public/images/clubhbar-logo.svg";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      {/* 
        Next/Image Background Example below:
        https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/background.js
      */}
      <div className={styles.bgWrap}>
        <Image
          alt="hashgraph-bg"
          src={background}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={50}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.topWrap}>
          <div className={styles.video}>
            <iframe
              src={`https://www.youtube.com/embed/JzFXZvTrEnI`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" 
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="clubhbar-logo"
              src={logo}
              layout="fill"
              objectFit="cover"
              quality={50}
            />
          </div>
        </div>
        <div className={styles.bottomWrap}>
          <h1>The Largest HBAR Community on the Net</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

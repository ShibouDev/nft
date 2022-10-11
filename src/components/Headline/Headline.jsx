import React, { useCallback } from "react";
import hands from "../assets/image/hands.png";
import Particles from "react-particles";
import "./particle.style.css";
import styles from "./headline.module.scss"
import { TitleUp, TitleDown, Desc } from "../assets/block/Text/Text"
import { loadFull } from "tsparticles";
import Fade from 'react-reveal/Fade'
import { Solana, Globe } from "../SvgImporter"
import { ButtonHovered } from "../assets/block/Button/Button"
import Ticker from "react-ticker";
import { Playlist } from "../assets/block/Playlist/Playlist";
const Headline = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        width={100}
        height={100}
        className="particles"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              // onHover: {
              //   enable: true,
              //   mode: "repulse",
              // },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className={styles.headline}>
        <div className={styles.headline_contentLeft}>
          <Fade>
            <TitleUp text="Music for NFT creators." />
            <TitleDown text="Digital Music for fans." />
            <Desc text="Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers." />
          </Fade>
          <div className={styles.headline_contentLeft_bottom}>
            <div className={styles.headline_contentLeft_bottom_powered}>
              Powered by
              <Solana />
            </div>
            <div className={styles.headline_contentLeft_bottom__button}>
              <ButtonHovered text="Discover More" small hovered />
            </div>
          </div>
        </div>
        <div className={styles.headline_contentRight}>
          <img src={hands} alt="" />
        </div>
      </div>
      <Ticker>
        {() => (
          <div className={styles.marque}>
            <p className={styles.marque__text}>new way to reach the new fan</p>
            <Globe />
          </div>
        )}
      </Ticker>
    </>
  );
};

export default Headline;

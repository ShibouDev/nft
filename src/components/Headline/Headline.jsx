import React from "react";
import hands from "../assets/image/hands.png";
import Particles from "react-particles";
import "./particle.style.css";
import styles from "./headline.module.scss"
import {TitleUp, TitleDown, Desc} from "../assets/block/Text/Text"
const Headline = () => {
  return (
    <>
      <Particles
        id="tsparticles"
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
        <TitleUp text="Music for NFT creators." />
        <TitleDown text="Digital Music for fans." />
        <Desc text="Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers." />
        <div className={styles.headline_contentLeft_powered}>
          Powered by
          </div>
        </div>
      <div className={styles.headline_contentRight}>
        <img src={hands} alt="" />
      </div>
      <div className={styles.headline_marque}>
      </div>
      </div>
    </>
  );
};

export default Headline;

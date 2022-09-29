import React, { FC, useCallback } from "react";
import {
  HeadlineWrapper,
  ContentLeft,
  Powered,
  ContentRight,
  BottomMarque,
} from "./headline.style";
import TitleUp from "../assets/block/Text/Text";
import TitleDown from "../assets/block/Text/Text";
import Description from "../assets/block/Text/Text";
import hands from "../assets/image/hands.png";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./particle.style.css";
interface Particle {
  width?: string;
  height?: string;
}
const Headline: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
    },
    []
  );
  return (
    <>
      <Particles<Particle>
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
    <HeadlineWrapper>
      <ContentLeft>
        <TitleUp textTitleUp="Music for NFT creators." />
        <TitleDown textTitleDown="Digital Music for fans." />
        <Description description="Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers." />
        <Powered>
          <p>Powered by</p>
        </Powered>
      </ContentLeft>
      <ContentRight>
        <img src={hands} alt="" />
      </ContentRight>
      <BottomMarque>
      </BottomMarque>
    </HeadlineWrapper>
    </>
  );
};

export default Headline;

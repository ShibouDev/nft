import styles from "./howDoWork.module.scss";
import Fade from "react-reveal/Fade";
import { TitleUp, Desc } from "../assets/block/Text/Text";
import playlistdata from "../assets/data/playlist";
import { useRef, useState, useEffect } from "react";
const HowDoWork = () => {
  const carousel = useRef(null);
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scroolX: 0,
  });
  const cellCount = 9;
  let selectedIndex = 0;
  const rotateCarousel = () => {
    const angel = (selectedIndex / cellCount) * -360;
    carousel.current.style.transform =
      "rotateY(" + angel + "deg) rotate3d(0, 1, 0, -45deg)";
  };
  const handleClickBack = () => {
    selectedIndex--;
    rotateCarousel();
  };

  const handleClickUp = () => {
    selectedIndex++;
    rotateCarousel();
  };

  const OnMouseMove = (e) => {
    if (carousel && carousel.current && !carousel.current.contains(e.target)) {
      return;
    }
    e.preverentDefault();

    const { clientX, scroolX, isScrolling } = state;

    if (!isScrolling) {
      carousel.current.scroolLeft = scroolX + e.clientX - clientX;

      setState({
        ...state,
        scroolX: scroolX + e.clientX - clientX,
        clientX: e.clientX,
      });
    }
  };
  const OnMouseUp = (e) => {
    if (carousel && carousel.current && !carousel.current.contains(e.target)) {
      return;
    }
    e.preverentDefault();

    setState({
      ...state,
      isScrolling: true,
    });
  };

  const OnMouseDown = (e) => {
    if (carousel && carousel.current && !carousel.current.contains(e.target)) {
      return;
    }
    e.preverentDefault();

    setState({
      ...state,
      isScrolling: true,
      clientX: e.clientX,
    });
  };
  useEffect(() => {
    document.addEventListener("mousedown", OnMouseDown)
    document.addEventListener("mouseup", OnMouseUp)
    document.addEventListener("mousemove", OnMouseMove)
    
    return () => {
      document.addEventListener("mousedown", OnMouseDown)
    document.addEventListener("mouseup", OnMouseUp)
    document.addEventListener("mousemove", OnMouseMove)
    }
  })
  return (
    <div className={styles.howdowork}>
      <div className={styles.howdowork_info}>
        <Fade>
          <TitleUp text="How do Music NFTs work?" />
          <Desc text="NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited." />
        </Fade>
      </div>
      <div className={styles.howdowork_scene}>
        <div
          className={styles.howdowork_scene_carousel}
          id="carousel"
          ref={carousel}
          onMouseDown={OnMouseDown}
          onMouseUp={OnMouseUp}
          onMouseMove={OnMouseMove}
        >
          {playlistdata.map((el) => (
            <img
              className={styles.howdowork_scene_carousel__cell}
              src={el.image}
              alt=""
            ></img>
          ))}
        </div>
      </div>
      <p>
        <button class="previous-button" id="prev" onClick={handleClickBack}>
          Previous
        </button>
        <button class="next-button" id="next" onClick={handleClickUp}>
          Next
        </button>
      </p>
    </div>
  );
};
export default HowDoWork;

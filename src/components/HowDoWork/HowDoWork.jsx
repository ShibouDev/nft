import styles from "./howDoWork.module.scss";
import Fade from "react-reveal/Fade";
import { TitleUp, Desc } from "../assets/block/Text/Text";
import playlistdata from "../assets/data/playlist";
import { useRef, useState, useEffect } from "react";

const HowDoWork = () => {
  const carousel = useRef(null);
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0, // динамическая
    scroolX: 0,
    curX: 0, // первая и последняя
    curPos: 0, // текущая
  });
  const cellCount = 9;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rotateCarousel = (x) => {
    // console.log("rotateY(" + x / 1.33 + "deg) rotate3d(0, 1, 0, -45deg)");
    const r = state.curX + x;
    console.log({r, curX: state.curX})

    carousel.current.style.transform =
      "rotateY(" + r / 1.3333333 + "deg) rotate3d(0, 1, 0, -45deg)";

    setState({
      ...state,
      curX: r,
    });
  };

  const OnMouseUp = (e) => {
    // const angel1 = Math.ceil((state.clientX * cellCount) / -360);
    // const angel = (angel1 / cellCount) * -360;

    // carousel.current.style.transform =
    //   "rotateY(" + angel + "deg) rotate3d(0, 1, 0, -45deg)";
    console.log({

    })
    setState({
      ...state,
      // curX: 0,
      curPos: e.clientX,
      isScrolling: false,
    });
  };

  const OnMouseDown = (e) => {
    // setSelectedIndex(selectedIndex + 1)

    setState({
      ...state,
      // curX: 0,
      curPos: e.clientX,
      isScrolling: true,
    });
  };

  useEffect(() => {
    if (state.isScrolling) {
      console.log({x: state.clientX - state.curPos});
      rotateCarousel(state.clientX - state.curPos);
    }
  }, [state.clientX]);

  const handlerUpdateClientCoords = (e) => {
    setState({
      ...state,
      clientX: e.clientX,
    });
  };

  document.addEventListener("mousemove", handlerUpdateClientCoords);

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
        >
          {playlistdata.map((el) => (
            <div
              className={styles.howdowork_scene_carousel__cell}
              onMouseDown={OnMouseDown}
              onMouseUp={OnMouseUp}
              style={{
                backgroundImage: `url(${el.image})`,
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowDoWork;

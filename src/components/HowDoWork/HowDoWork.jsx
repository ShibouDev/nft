import styles from "./howDoWork.module.scss"
import Fade from 'react-reveal/Fade'
import { TitleUp, Desc } from "../assets/block/Text/Text"
import playlistdata from '../assets/data/playlist'
import { useRef } from "react"
const HowDoWork = () => {
    const carousel = useRef(null)
    const cellCount = 9
    let selectedIndex = 0
    
    const rotateCarousel = (e) => {
        const angel = selectedIndex / cellCount * -360
        carousel.style.transform = 'rotateY(' + angel + 'deg) rotate3d(0.5, 0.6, 0.5, -45deg)'
    }
    const handleClickBack = () => {
        selectedIndex--;
        rotateCarousel();
    }

    const handleClickUp = () => {
        selectedIndex++;
        rotateCarousel();
    }
    return (
        <div className={styles.howdowork}>
            <div className={styles.howdowork_info}>
                <Fade>
                    <TitleUp text="How do Music NFTs work?" />
                    <Desc text="NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited." />
                </Fade>
            </div>
            <div className={styles.howdowork_scene}>
                <div className={styles.howdowork_scene_carousel} id="carousel" ref={carousel}>
                    {playlistdata.map((el) => (
                        <img className={styles.howdowork_scene_carousel__cell} src={el.image} alt=""></img>
                    ))}
                </div>
            </div>
            <p>
                <button class="previous-button" id="prev" onClick={handleClickBack}>Previous</button>
                <button class="next-button" id="next" onClick={handleClickUp}>Next</button>
            </p>
        </div>
    )
}
export default HowDoWork

import styles from "./howDoWork.module.scss"
import Fade from 'react-reveal/Fade'
import { TitleUp, Desc } from "../assets/block/Text/Text"
import playlistdata from '../assets/data/playlist'
const HowDoWork = () => {
    const carousel = document.getElementById("carousel")
    const cellCount = 9
    let selectedIndex = 0

    const rotateCarousel = () => {
        const angel = selectedIndex / cellCount * -360
        carousel.style.transform = 'translateZ(-288) rotateY(' + angel + 'deg)'
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
                <div className={styles.howdowork_scene_carousel} id="carousel">
                    {playlistdata.map((el) => (
                        <img className={styles.howdowork_scene_carousel__cell} src={el.image} alt=""></img>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HowDoWork

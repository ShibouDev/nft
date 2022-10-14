import styles from "./howDoWork.module.scss"
import Fade from 'react-reveal/Fade'
import { TitleUp, Desc } from "../assets/block/Text/Text"
import playlistdata from '../assets/data/playlist'
const HowDoWork = () => {
    let radius = 240;
    let autoRotate = true;
    let rotateSpeed = -60;
    let imgWidth = 140;
    let imgHeight = 205;
    setTimeout(init, 300);
    let odrag = document.getElementById("drag-container");
    let ospin = document.getElementById("spin-container");
    let carousel = document.getElementById("carousel");
    let aImg = ospin.getElementsByTagName("a");
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";
    let ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";
    let init = (delayTime) => {
        for (let i = 0; i < aImg.length; i++) {
            aImg[i].style.transform =
                "rotateY(" +
                i * (360 / aImg.length) +
                "deg) translateZ(" +
                radius +
                "px)";
            aImg[i].style.transition = "transform 1s";
            aImg[i].style.transitionDelay =
                delayTime || (aImg.length - i) / 4 + "s";
        }
    }
    const applyTranform = (obj) => {
        if (tY > 180) tY = 180;
        if (tY < 0) tY = 0;
        obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }
    const playSpin = (yes) => {
        ospin.style.animationPlayState = yes ? "running" : "paused";
    }
    let sX,
        sY,
        nX,
        nY,
        desX = 0,
        desY = 0,
        tX = 0,
        tY = 10;
    if (autoRotate) {
        let animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
        ospin.style.animation = `${animationName} ${Math.abs(
            rotateSpeed
        )}s infinite linear`;
    }
    carousel.onpointerdown = function (e) {
        clearInterval(odrag.timer);
        e = e || window.event;
        let sX = e.clientX,
            sY = e.clientY;
        this.onpointermove = function (e) {
            e = e || window.event;
            let nX = e.clientX,
                nY = e.clientY;
            desX = nX - sX;
            desY = nY - sY;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTranform(odrag);
            sX = nX;
            sY = nY;
        };
        this.onpointerup = function (e) {
            odrag.timer = setInterval(function () {
                desX *= 0.95;
                desY *= 0.95;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTranform(odrag);
                playSpin(false);
                if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                    clearInterval(odrag.timer);
                    playSpin(true);
                }
            }, 17);
            this.onpointermove = this.onpointerup = null;
        };
        return false;
    };
    return (
        <div className={styles.howdowork}>
            <div className={styles.howdowork_info}>
                <Fade>
                    <TitleUp text="How do Music NFTs work?" />
                    <Desc text="NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artistes get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited." />
                </Fade>
            </div>
            <div className={styles.howdowork_carousel} id="carousel">
                <div className={styles.howdowork_carousel_drag} id="drag">
                    <div className={styles.howdowork_carousel_drag_spin}>
                        {playlistdata.map((el) => (
                            <a href={el.image}><img src={el.image} alt="" /></a>
                        ))}
                    </div>
                    <div className={styles.howdowork_carousel_drag_ground} id="ground"></div>
                </div>
            </div>
        </div>
    )
}
export default HowDoWork

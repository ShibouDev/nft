import React, { useEffect, useState, useRef } from 'react';
import styles from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Hamburger from 'hamburger-react'
import { Burger } from '../assets/block/BurgerMenu/Burger';
import Fade from 'react-reveal/Fade'
import {QR} from '../SvgImporter'
import QRious from "qrious";
const Header = () => {
    // Functions
    const [w, setW] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)
    const [showQr, setShowQr] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setW(window.innerWidth)
        })
    }, [])
    //Variables
    const mobile = 790
    const navEl = ['Marketplace', 'About', 'Resources', 'Faq']
    const flowhidden = () => {
        open ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }
    useEffect(() => {
        if(w > mobile){
            setOpen(false)
        }
    })
    const ViewQr = () => {
    const canvas = useRef(null)
    useEffect(() => {
        if(canvas != null && canvas.current != null){
            let qr = new QRious({
                background: "white",
                backgroundAlpha: 1,
                foreground: "black",
                foregroundAlpha: 1,
                level: "m",
                padding: null,
                size: 172,
                value: window.location.href,
                element: canvas.current,
            })
        }
    })
        return (
            <Fade>
            <div className={styles.qrPopup} onClick={() => setShowQr(false)}>
                <div className={styles.qrPopup_wrapper}>
                    <div className={styles.qrPopup_wrapper_title}>
                    Scan on your phone for copy link
                    </div>
			        <div className={styles.qrPopup_wrapper_icon}><canvas ref={canvas}/></div>
                </div>
            </div>
            </Fade>
        )
    }
    return (
        <div className={styles.header}>
            <div className={open ? styles.header_container__open : styles.header_container}>
                <div className={styles.header_container_logo}>
                    <div className={styles.header_container_logo__text}>Music</div>
                    <div className={styles.header_container_logo__text_bottom}>NFT Platform</div>
                </div>
                {w > mobile || open ?
                    <Fade>
                        <div className={open ? styles.header_container_nav__open : styles.header_container_nav}>
                            {navEl.map((el) =>
                                <div className={open ? styles.header_container_nav__text__open : styles.header_container_nav__text}>{el}</div>
                            )}
                            {open ?
                                <div className={open ? styles.header_container_socialIcon__open : styles.header_container_socialIcon}>
                                    <FontAwesomeIcon icon={faFacebookF} color="#fff" size="lg"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faTwitter} color="#fff" size="lg"></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faInstagram} color="#fff" size="lg"></FontAwesomeIcon>
                                    <QR onClick={() => setShowQr(prevState => !prevState)}/>
                                </div>
                                : ''
                            }
                            {showQr && <ViewQr/>}
                        </div>
                        {!open ?
                            <div className={styles.header_container_socialIcon}>
                                <FontAwesomeIcon icon={faFacebookF} color="#fff" size="lg"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faTwitter} color="#fff" size="lg"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faInstagram} color="#fff" size="lg"></FontAwesomeIcon>
                            </div>
                            :
                            <Hamburger toggled={open} toggle={setOpen} color="white" onClick={flowhidden()}/>}
                    </Fade>
                    : <Hamburger toggled={open} toggle={setOpen} color="white" onClick={flowhidden()} />
                }
            </div>
            {open && w < mobile ? <Burger /> : ''}
        </div>
    );
}

export default Header;
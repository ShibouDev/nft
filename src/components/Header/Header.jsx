import React, {useEffect, useState} from 'react';
import styles from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Hamburger from 'hamburger-react'
import {Burger} from '../assets/block/BurgerMenu/Burger';
const Header = () => {
    // Functions
    const [w, setW] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)
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
    return (
        <div className={styles.header}>
            <div className={open ? styles.header_container__open : styles.header_container}>
                <div className={styles.header_container_logo}>
                    <div className={styles.header_container_logo__text}>Music</div>
                    <div className={styles.header_container_logo__text_bottom}>NFT Platform</div>
                </div>
                {w > mobile ?
                <>
                 <div className={styles.header_container_nav}>
                 {navEl.map((el) =>
                     <div className={styles.header_container_nav__text}>{el}</div>
                 )}
             </div>
             <div className={styles.header_container_socialIcon}>
                 <FontAwesomeIcon icon={faFacebookF} color="#fff" size="lg"></FontAwesomeIcon>
                 <FontAwesomeIcon icon={faTwitter} color="#fff" size="lg"></FontAwesomeIcon>
                 <FontAwesomeIcon icon={faInstagram} color="#fff" size="lg"></FontAwesomeIcon>
             </div>
             </>
                : <Hamburger toggled={open} toggle={setOpen} color="white" onClick = {flowhidden()}/>
            }
            </div>
            {open ?  <Burger/> : ''}
        </div>
    );
}

export default Header;
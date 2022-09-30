import React, {useEffect, useState} from 'react';
import styles from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    // Functions
    const [w, setW] = useState(window.innerWidth)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setW(window.innerWidth)
        })
    }, [])
    const burgerOpen = () =>{
        setOpen(!open)
    }
    //Variables
    const mobile = 790
    const navEl = ['Marketplace', 'About', 'Resources', 'Faq']
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
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
                : <>
                 {open ? 
                    <FontAwesomeIcon icon={faBars} color="#fff" size="xl" onClick={burgerOpen()}></FontAwesomeIcon>
                 : 
                    <FontAwesomeIcon icon={faXmark} color="#fff" size="xl" onClick={burgerOpen()}></FontAwesomeIcon>
                }
                </>}
               
            </div>
        </div>
    );
}

export default Header;
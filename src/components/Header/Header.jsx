import React from 'react';
import styles from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Header = () => {
    const navEl = ['Marketplace', 'About', 'Resources', 'Faq']
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.header_container_logo}>
                    <div className={styles.header_container_logo__text}>Music</div>
                    <div className={styles.header_container_logo__text_bottom}>NFT Platform</div>
                </div>
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
            </div>
        </div>
    );
}

export default Header;
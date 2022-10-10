import React, { useState, useEffect } from "react"
import styles from "./playlist.module.scss"
import ReactAudioPlayer from 'react-audio-player';
import playlistdata from '../../data/playlist'
import { ButtonHovered } from "../Button/Button"
export const Playlist = (props) => {
    return (
        <div className={styles.playlist}>
            {playlistdata.map((el, index) => (
                <div className={styles.playlist_container}>
                    <img className={styles.playlist_container__image} src={el.image}></img>
                    <div className={styles.playlist_container__title}>{el.name}</div>
                    {props.small ?
                        <div className={styles.playlist_container_info}>
                            <div className={styles.playlist_container_info__price}>{el.price}</div>
                        </div>
                        :
                        <>
                            <div className={styles.playlist_container_info}>
                                <div className={styles.playlist_container_info__price}>{el.price}</div>
                                <div className={styles.playlist_container_info__tokens}>{el.tokens}</div>
                            </div>
                            <div className={styles.playlist_container_twobtn}>
                                <ButtonHovered text="Play now" small hovered />
                                <ButtonHovered text="BUY NFT" small hovered />
                            </div>
                        </>
                    }
                </div>
            ))}
        </div>
    )
}
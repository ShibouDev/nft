import styles from './NFTMarketplace.module.scss'
import Playlist from '../assets/block/Playlist/Playlist'
const NFTMarketplace = () => {
    return(
        <div className={styles.nftMarketplace}>
            <div className={styles.nftMarketplace_playlists}>
                <Playlist small/>
            </div>
        </div>
    )
}
export default NFTMarketplace
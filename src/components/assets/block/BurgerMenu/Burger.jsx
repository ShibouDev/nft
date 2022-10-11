import styles from "./burder.module.scss";
import { CSSTransitionGroup } from 'react-transition-group'
import Fade from 'react-reveal/Fade'
import './animate.css'
export const Burger = (props) => {
    const navEl = ['Marketplace', 'About', 'Resources', 'Faq']
    return (
        <Fade>
            <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <div className={styles.burger}>
                </div>
            </CSSTransitionGroup>
        </Fade>
    )
}
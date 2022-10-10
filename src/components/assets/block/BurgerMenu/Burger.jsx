import styles from "./burder.module.scss";
import { CSSTransitionGroup } from 'react-transition-group'
import './animate.css'
export const Burger = (props) => {
    return (
        <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
       <div className={styles.burger}></div>
       </CSSTransitionGroup>
    )
}
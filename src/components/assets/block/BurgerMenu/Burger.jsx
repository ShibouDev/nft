import styles from "./burder.module.scss";
import Transition from "react-transition-group";
import { useRef } from "react";
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};
export const Burger = (props) => {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    return (
        <Transition
            nodeRef={nodeRef} in={inProp} timeout={duration}>
                {state => (
       <div ref={nodeRef} className={styles.burger} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
        </div>)}
        </Transition>
    )
}
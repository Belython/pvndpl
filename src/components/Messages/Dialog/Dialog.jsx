import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink className={({isActive}) => isActive ? styles.linkToMessageActive : styles.linkToMessage}
                 to={"/pvndpl-front/messages/" + props.id}>
            <div className={styles.dialog}>
                <img className={styles.avatar}
                     src={props.avatar} alt={"ава"}/>
                <div>
                    <p>{props.name}</p>
                    <div className={styles.info}>
                        <img className={styles.avatarMessage}
                             src={props.avatar} alt={"ава"}/>
                        <p className={styles.lastMessage}>{props.lastMessage}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Dialog;

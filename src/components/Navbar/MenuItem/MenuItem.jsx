import React from 'react';
import styles from './MenuItem.module.css';
import {NavLink} from "react-router-dom";


const MenuItem = ({icon, text, path}) => {
    return (
        <li className={styles.menuItem}>
            <NavLink to={path} className={({isActive}) => isActive ? styles.activeLink : styles.link}> {icon}<p className={styles.linkText}>{text}</p></NavLink>
        </li>
    );
}

export default MenuItem

import React from 'react';
import styles from './Menu.module.css';
import {Link} from "react-router-dom";

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? styles.menuActive : styles.Menu} onClick={() => setActive(false)}>
            <div className={styles.blur}/>
            <div className={styles.menuContent} onClick={e => e.stopPropagation()}>
                <div className={styles.menuHeader}>{header}</div>
                <ul className={styles.menu}>
                    {items.map(item =>
                        <li className={styles.menuItem}>
                            <Link className={styles.link} to={item.href}>{item.icon} <p
                                className={styles.linkText}>{item.value}</p></Link>
                        </li>)}
                </ul>
            </div>
        </div>
    );
}

export default Menu;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderContent.module.css';

const HeaderContent = ({name, section, count}) => (
    <div className={styles.HeaderContent} data-testid="HeaderContent">
        <h2 className={styles.section}>
            {section}
            <span className={styles.count}>{count}</span>
        </h2>
    </div>
);

export default HeaderContent;

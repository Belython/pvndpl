import React from 'react';
import styles from './Posts.module.css';

const Posts = () => (
    <div className={styles.posts} data-testid="Posts">
        <div className={styles.widgetBox}>
            <input placeholder={"ИДИТЕ ВСЕ НАХУЙ ..."}/>
        </div>
    </div>
);

export default Posts;

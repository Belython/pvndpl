import React from 'react';
import styles from './NotFoundPage.module.css';
import {Link} from "react-router-dom";

const NotFoundPage = () => (
  <div className={styles.NotFoundPage} data-testid="NotFoundPage">
      <p className={styles.textNotFound}>404</p>
      <div className={styles.info}>
          <p className={styles.subtitle}>Ой!!...</p>
          <p className={styles.text}> Похоже, вы свернули не туда и столкнулись с черной дырой в сети, которая поглотила страницу, которую вы искали! Но не паникуйте, потому что вы можете вернуться!</p>
          <p className={styles.text}> Если проблема не устранена, отправьте нам электронное письмо в нашу службу поддержки по адресу pvndpl@mail.ru</p>
          <Link className={styles.button} to={"/pvndpl-front/content"}>На главную</Link>
      </div>
  </div>
);

export default NotFoundPage;

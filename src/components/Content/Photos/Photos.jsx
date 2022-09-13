import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photos.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";

const Photos = () => (
  <div className={styles.Photos} data-testid="Photos">
    <HeaderContent name={"Александр Великодный"} count={13} section={"Фотографии"}/>
      <div className={styles.album}>

      </div>
  </div>
);

export default Photos;

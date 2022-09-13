import React from 'react';
import PropTypes from 'prop-types';
import styles from './Musics.module.css';

const Musics = () => (
  <div className={styles.Musics} data-testid="Musics">
    Musics Component
  </div>
);

Musics.propTypes = {};

Musics.defaultProps = {};

export default Musics;

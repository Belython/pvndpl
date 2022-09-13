import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewsFeed.module.css';

const NewsFeed = () => (
  <div className={styles.NewsFeed} data-testid="NewsFeed">
    NewsFeed Component
  </div>
);

NewsFeed.propTypes = {};

NewsFeed.defaultProps = {};

export default NewsFeed;

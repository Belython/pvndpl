import React from 'react';
import PropTypes from 'prop-types';
import styles from './Group.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";

const Group = () => (
  <div className={styles.Group} data-testid="Group">
      <HeaderContent name={"Александр Великодный"} count={4} section={"Группы"}/>
      <div>

      </div>
  </div>
);

Group.propTypes = {};

Group.defaultProps = {};

export default Group;

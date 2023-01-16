import React from 'react';
import styles from './Message.module.css';

const Message = (props) => (
  <div className={styles.message} data-testid="Message">
    <img className={styles.avatar} src={props.avatar} alt={"ава"} />
      {props.message}
  </div>
);

export default Message;

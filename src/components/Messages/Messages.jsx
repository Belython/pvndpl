import React, {useRef} from 'react';
import styles from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/ActionCreators";
import Messenger from './Messenger';

const Messages = (props) => {
    return (
        <div className="App">
          <Messenger />
        </div>
      );
}

export default Messages;

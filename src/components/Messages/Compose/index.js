import React from 'react';
import './Compose.css';
import axios from "../../../redux/axios";
import Cookies from "js-cookie";

export default function Compose(props) {
    return (
      <div className="compose">
        {
          props.rightItems
        }
      </div>
    );
}
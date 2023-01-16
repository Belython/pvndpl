import styles from './Friends.module.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import HeaderContent from "../HeaderContent/HeaderContent";
import axios from '../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const query = window.location.href.split('/')
const path = `/` + `${query[3]}` + `/` + `${query[4]}` + `/`+ `${query[5]}` + '/'

const Aboba = (props) => {
    const { username, name, id } = props.data;
    return (
        <a href={`http://localhost:3000/pvndpl-front/users/${id}`}>
            <div className={styles.users}>
                <div className={styles.user}>
                    <div className={styles.preview}>
                        <img className={styles.headerInfoImg}
                             src={" https://krot.info/uploads/posts/2022-03/1646304475_1-krot-info-p-samie-smeshnie-obezyani-smeshnie-foto-1.jpg"} />
                        <p className={styles.name}>{name}</p>
                        <p className={styles.tag}>@{username}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

const Friends = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getConversations()
        getConversations1()
        user()
    }, [])

    const [username1, setUsername1] = useState();
    const [username, setUsername] = useState();

    const user = (e) => {
        axios.get(
            '/user-info',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            setUsername1(response)

        });
    }

    const getConversations = (e) => {
        axios.get(
            '/profile',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            setUsername(response)

        });
    }
    const tagPath = query[5]
    const getConversations1 = () => {
        axios.get(
            `/tags/${tagPath}`,
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            let newConversations = response.data.map(result => {
                return {
                    name: `${result.firstname} ${result.lastname}`,
                    id: result.id,
                    username: result.username
                };
            });
            setConversations([...conversations, ...newConversations])
        });
    }

    if (Array.isArray(conversations) && !!username1 && !!username) {
        const name1 = `${username1.data.firstname} ${username1.data.lastname}`;
        const count = username.data.subscribersCount;
        return (<div className={styles.Friend} data-testid="Friend">
            <HeaderContent name={name1} section={`Пользователи с тегом ${query[5]}`}  />
            {
                conversations.map(conversation =>
                    <Aboba
                        data={conversation}
                    />
                )
            }
        </div>)
    }
}


Friends.propTypes = {};

Friends.defaultProps = {};

export default Friends;

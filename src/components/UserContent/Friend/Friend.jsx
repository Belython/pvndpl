import styles from './Friend.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

const Aboba = (props) => {
    const { username, name, id } = props.data;
    return (
        <a href={`http://localhost:3000/pvndpl-front/users/${id}`}>
            <div className={styles.users}>
                <div className={styles.user}>
                    <div className={styles.preview}>
                        <img className={styles.headerInfoImg}
                            src={"https://sciencequizing.com/wp-content/uploads/2020/03/ccelebritiesfoto0_Portrait-of-a-monkey.jpg"} />
                        <p className={styles.name}>{name}</p>
                        <p className={styles.tag}>@{username}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

const Friend = (props) => {
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
            `/user-info/${props.path}`,
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            setUsername1(response)
        });
    }

    const getConversations = (e) => {
        axios.get(
            `/users/${props.path}`,
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            setUsername(response)
        });
    }

    const getConversations1 = () => {
        axios.get(
            `/subscribers/${props.path}`,
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            let newConversations = response.data.map(result => {
                return {
                    name: `${result.firstName} ${result.secondName}`,
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
            <HeaderContent name={name1} section={"Подписки"} count={count} />
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


Friend.propTypes = {};

Friend.defaultProps = {};

export default Friend;


import styles from './Group.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Aboba = (props) => {
    const { username, name, id } = props.data;
    return (
        <a href={`http://localhost:3000/pvndpl-front/users/${id}`}>
            <div className={styles.users}>
                <div className={styles.user}>
                    <div className={styles.preview}>
                        <img className={styles.headerInfoImg}
                            src={"https://damion.club/uploads/posts/2022-01/thumbs/1642968512_17-damion-club-p-tupaya-obezyana-19.jpg"} />
                        <p className={styles.name}>{name}</p>
                        <p className={styles.tag}>@{username}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}


const Group = () => {    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getConversations()
        getConversations1()
        user()
    }, [])

    const [username1, setUsername1] = useState();
    const [username, setUsername] = useState();

    const user = (e) => {
        axios.get(
            `/user-info`,
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

    const getConversations1 = () => {
        axios.get(
            `/subscriptions`,
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
        const count = username.data.subscriptionsCount;
        return (<div className={styles.Friend} data-testid="Friend">
            <HeaderContent name={name1} section={"Падпищики"} count={count} />
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


export default Group;

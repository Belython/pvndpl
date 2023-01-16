import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Groups.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";
import axios from "../../redux/axios";
import Cookies from "js-cookie";

const Aboba = (props) => {
    const { username, name, id } = props.data;
    console.log(props.data)
    return (
        <a href={`http://localhost:3000/pvndpl-front/users/${id}`}>
            <div className={styles.users}>
                <div className={styles.user}>
                    <div className={styles.preview}>
                        <img className={styles.headerInfoImg}
                             src={"https://www.meme-arsenal.com/memes/b417c578a94cc5c36434affe260309de.jpg"} />
                        <p className={styles.name}>{name}</p>
                        <p className={styles.tag}>@{username}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

const Groups = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        axios.get(
            '/users-all',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            let newConversations = response.data.map(result => {
                return {
                    id: result.id,
                    username: result.username,
                    name: `${result.firstname} ${result.lastname}`,
                };
            });
            setConversations([...conversations, ...newConversations])
        });
    }
        return (<div className={styles.Friend} data-testid="Friend">
            <HeaderContent section={"Люди"}  />
            {
                conversations.map(conversation =>
                    <Aboba
                        data={conversation}
                    />
                )
            }
        </div>)
    }

Groups.propTypes = {};

Groups.defaultProps = {};

export default Groups;

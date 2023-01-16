import style from "./About.module.css";
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

const About = (props) => {
    const [username, setUsername] = useState();

    useEffect(() => {
        getConversations()
    }, [])

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
    if (!!username) {
        return (
            <div className={style.main}>
                <div className={style.widgetBox}>
                    <p className={style.mainTitle}>Обо мне</p>
                    <p className={style.informationText}>{username.data.about}</p>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Дата создания</p>
                        <p className={style.informationText}> {username.data.createdDate}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Город</p>
                        <p className={style.informationText}> {username.data.city}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Сайт</p>
                        <a className={style.informationText}
                            href={username.data.website}>  {username.data.website}</a>
                    </div>
                    <div>
                    </div>
                </div>
                <div className={style.widgetBox}>
                <p className={style.mainTitle}>Интересы</p>
                    <div>
                        <p className={style.interestsTitle}>Любимые ТВ шоу</p>
                        <p className={style.informationText}> {username.data.tvShows}</p>
                    </div>
                    <div>
                        <p className={style.interestsTitle}>Любимые Исполнители / Артисты</p>
                        <p className={style.informationText}> {username.data.showmen}</p>
                    </div>
                    <div>
                        <p className={style.interestsTitle}>Любимые книги</p>
                        <p className={style.informationText}>{username.data.books}</p>
                    </div>
                    <div>
                        <p className={style.interestsTitle}>Любимые игры</p>
                        <p className={style.informationText}> {username.data.games}</p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className={style.widgetBox}>
                <p className={style.mainTitle}>Персональная информация</p>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Email</p>
                        <p className={style.informationText}> {username.data.email}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>День рождение</p>
                        <p className={style.informationText}> {username.data.birthdate}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Занятость</p>
                        <p className={style.informationText}> {username.data.busyness}</p>
                    </div>
                    <div className={style.informationLine}>
                        <p className={style.informationTitle}>Родной город</p>
                        <p className={style.informationText}>{username.data.nativeCity}</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
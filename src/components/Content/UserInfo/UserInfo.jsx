import style from "./UserInfo.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import React, {useState, useEffect} from 'react';

const Tag = (props) => {
    const {title} = props.data
    return (
        <a href={`http://localhost:3000/pvndpl-front/tag/${title}`}>{title}</a>
    )
}
const UserInfo = (props) => {

    const isPhone = useMediaQuery('(max-width:605px)');
    const [username, setUsername] = useState();
    const [username1, setUsername1] = useState();
    const [tags, setTags] = useState([]);


    useEffect(() => {
        getConversations()
        user()
    }, [])

    const user = (e) => {
        axios.get(
            '/user-info',
            {
                headers: {Authorization: "Bearer ".concat(Cookies.get('JWT'))}
            }
        ).then(response => {
            setUsername1(response)
        });
        if (true) {
            axios.get(
                `/profile/tags`,
                {
                    headers: {Authorization: "Bearer ".concat(Cookies.get('JWT'))}
                }
            ).then(response => {
                let tagList = response.data.map(result => {
                    return {
                        title: result.title
                    };
                });
                setTags([...tags, ...tagList])
            });
        }
    }

    const getConversations = (e) => {
        axios.get(
            '/profile',
            {
                headers: {Authorization: "Bearer ".concat(Cookies.get('JWT'))}
            }
        ).then(response => {
            setUsername(response)

        });
        console.log(username, username1)

    }
    const list = tags.map((el) =>
        <Tag data={el}/>)
    console.log(list)
    if (isPhone) {
        return (
            <div className={style.userInfo}>
                <div className={style.headerInfo}>
                    <img className={style.headerInfoImg}
                         src={"https://sun9-49.userapi.com/impg/vKedzYpG0W2WPdlt6lwvtRN8lMYyo1WY58k_JA/PKHIhlUcXcA.jpg?size=1215x2160&quality=95&sign=c48dc9952636b2cde75cc3ae82e7fc9b&type=album"}/>
                    <p className={style.name}>{props}</p>
                    <p>@Belython</p>
                </div>
                <div className={style.stats}>
                    <div className={style.statsBlock}>
                        <p className={style.statsTitle}>11</p>
                        <p className={style.statsText}>Посты</p>
                    </div>
                    <div className={style.statsBlock}>
                        <p className={style.statsTitle}>228</p>
                        <p className={style.statsText}>Друзей</p>
                    </div>
                    <div>
                        <p className={style.statsTitle}>1488</p>
                        <p className={style.statsText}>Комментарии</p>
                    </div>
                </div>
            </div>
        );
    } else if (!!username && !!username1) {
        {
            return (
                <div className={style.userInfo}>
                    <div className={style.stats}>
                        <div className={style.statsBlock}>
                            <p className={style.statsTitle}>{username.data.postsCount}</p>
                            <p className={style.statsText}>Посты</p>
                        </div>
                        <div className={style.statsBlock}>
                            <p className={style.statsTitle}>{username.data.subscribersCount}</p>
                            <p className={style.statsText}>Подписки</p>
                        </div>
                        <div className={style.statsBlock}>
                            <p className={style.statsTitle}>{username.data.subscriptionsCount}</p>
                            <p className={style.statsText}>Подписчики</p>
                        </div>
                    </div>
                    <div className={style.headerInfo}>
                        <img className={style.headerInfoImg}
                             src={"https://pic.rutubelist.ru/video/25/e7/25e78d1f435b1bc032c2d2a518a7beee.jpg"}/>
                        <p className={style.name}>{username1.data.firstname} {username1.data.lastname}</p>
                        <p>@{username1.data.username}</p>
                        {tags.map((el) =>
                            <Tag data={el}/>)}
                    </div>
                    <div className={style.socialNetworks}>

                    </div>
                </div>
            );
        }
    }
}

export default UserInfo
import React from 'react';
import styles from './Friend.module.css';
import HeaderContent from "../HeaderContent/HeaderContent";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBarIcon from '@mui/icons-material/SportsBar';

const Friend = () => (
    <div className={styles.Friend} data-testid="Friend">
        <HeaderContent name={"Александр Великодный"} count={6} section={"Друзья"}/>
        <div className={styles.users}>
            <div className={styles.user}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-37.userapi.com/impg/x9ecRXE00PuJoWw83i1Vvp3RW6tByE2sIvR7Jg/RnVfkphDPuU.jpg?size=960x640&quality=96&sign=e280335697987c2e622eca6b5a0e5161&type=album"}/>
                    <p className={styles.name}>Алексей Клименко</p>
                    <p className={styles.tag}>@vydar</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.socialNetworks}>
                        <SportsBarIcon className={styles.socialNetwork}/>
                        <FacebookIcon className={styles.socialNetwork}/>
                        <YouTubeIcon className={styles.socialNetwork}/>
                        <InstagramIcon className={styles.socialNetwork}/>
                        <TwitterIcon className={styles.socialNetwork}/>
                    </div>
                </div>
            </div>
            <div className={styles.user}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-54.userapi.com/impf/c625217/v625217726/461bb/qN1l36uvux8.jpg?size=866x1155&quality=96&sign=10a896fa269febbde151ae737cc4e0df&type=album"}/>
                    <p className={styles.name}>Максим Жуков</p>
                    <p className={styles.tag}>@zhukov.maksim</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.socialNetworks}>
                        <SportsBarIcon className={styles.socialNetwork}/>
                        <InstagramIcon className={styles.socialNetwork}/>
                        <TwitterIcon className={styles.socialNetwork}/>
                    </div>
                </div>
            </div>
            <div className={styles.user}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-44.userapi.com/impg/8Lr7KlzsaGWt6VDKS0oGEY2mzG-E1eh9an0v_A/3DkGvACEcM0.jpg?size=1080x795&quality=95&sign=68f0dfc88d2791e0a8b443b3874dacd1&type=album"}/>
                    <p className={styles.name}>Сергей Сесин</p>
                    <p className={styles.tag}>@tukatuta</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.socialNetworks}>
                        <SportsBarIcon className={styles.socialNetwork}/>
                        <FacebookIcon className={styles.socialNetwork}/>
                    </div>
                </div>
            </div>
            <div className={styles.user}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-74.userapi.com/impf/c639626/v639626671/1c00b/OjHDl7vUdkg.jpg?size=1152x2048&quality=96&sign=f5e87c16f75f185ce6946019c1ccf94a&type=album"}/>
                    <p className={styles.name}>Анатолий Коверин</p>
                    <p className={styles.tag}>@shizzainside</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.socialNetworks}>
                        <SportsBarIcon className={styles.socialNetwork}/>
                        <FacebookIcon className={styles.socialNetwork}/>
                        <YouTubeIcon className={styles.socialNetwork}/>
                        <InstagramIcon className={styles.socialNetwork}/>
                        <TwitterIcon className={styles.socialNetwork}/>
                    </div>
                </div>
            </div>
            <div className={styles.user}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://sun9-68.userapi.com/impg/vIreSgTZlTHp0BttP3Vku4MGfwn0yrEc3ggnFg/nLF8mfWn4OI.jpg?size=567x794&quality=96&sign=b7b6da89b7b20f672fd36672f7771ded&type=album"}/>
                    <p className={styles.name}>Егор Карпов</p>
                    <p className={styles.tag}>@kev_0011</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.socialNetworks}>
                        <SportsBarIcon className={styles.socialNetwork}/>
                        <TwitterIcon className={styles.socialNetwork}/>
                    </div>
                </div>
            </div>
            <div className={styles.user}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://i.ytimg.com/vi/Csp6d2jLoAk/maxresdefault.jpg"}/>
                    <p className={styles.name}>Почтальон Пэт</p>
                    <p className={styles.tag}>@turbosexsimvol</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.socialNetworks}>
                        <SportsBarIcon className={styles.socialNetwork}/>
                        <FacebookIcon className={styles.socialNetwork}/>
                        <YouTubeIcon className={styles.socialNetwork}/>
                        <InstagramIcon className={styles.socialNetwork}/>
                        <TwitterIcon className={styles.socialNetwork}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

Friend.propTypes = {};

Friend.defaultProps = {};

export default Friend;

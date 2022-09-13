import style from "./UserInfo.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";


const UserInfo = () => {

    const isPhone = useMediaQuery('(max-width:605px)');
    if (isPhone) {
        return (
            <div className={style.userInfo}>
                <div className={style.headerInfo}>
                    <img className={style.headerInfoImg}
                         src={"https://sun9-49.userapi.com/impg/vKedzYpG0W2WPdlt6lwvtRN8lMYyo1WY58k_JA/PKHIhlUcXcA.jpg?size=1215x2160&quality=95&sign=c48dc9952636b2cde75cc3ae82e7fc9b&type=album"}/>
                    <p className={style.name}>Александр Великодный</p>
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

                <div className={style.socialNetworks}>
                    <FacebookIcon className={style.socialNetwork}/>
                    <YouTubeIcon className={style.socialNetwork}/>
                    <InstagramIcon className={style.socialNetwork}/>
                    <TwitterIcon className={style.socialNetwork}/>
                </div>
            </div>
        );
    } else {
        return (
            <div className={style.userInfo}>
                <div className={style.stats}>
                    <div className={style.statsBlock}>
                        <p className={style.statsTitle}>11</p>
                        <p className={style.statsText}>Посты</p>
                    </div>
                    <div className={style.statsBlock}>
                        <p className={style.statsTitle}>228</p>
                        <p className={style.statsText}>Друзья</p>
                    </div>
                    <div>
                        <p className={style.statsTitle}>1488</p>
                        <p className={style.statsText}>Комментарии</p>
                    </div>
                </div>
                <div className={style.headerInfo}>
                    <img className={style.headerInfoImg}
                         src={"https://sun9-49.userapi.com/impg/vKedzYpG0W2WPdlt6lwvtRN8lMYyo1WY58k_JA/PKHIhlUcXcA.jpg?size=1215x2160&quality=95&sign=c48dc9952636b2cde75cc3ae82e7fc9b&type=album"}/>
                    <p className={style.name}>Александр Великодный</p>
                    <p>@Belython</p>

                </div>
                <div className={style.socialNetworks}>

                    <FacebookIcon className={style.socialNetwork}/>
                    <YouTubeIcon className={style.socialNetwork}/>
                    <InstagramIcon className={style.socialNetwork}/>
                    <TwitterIcon className={style.socialNetwork}/>
                </div>
            </div>
        );
    }
}

export default UserInfo
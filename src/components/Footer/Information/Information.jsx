import style from "./Information.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Icon28LogoVk} from "@vkontakte/icons";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import SocialNetwork from "./SocialNetwork/SocialNetwork";

const Information = () => {
    return (
        <div className={style.brand}>
            <div className={style.infoBrand}>
                <SportsBarIcon className={style.logo} sx={{height: "40px", width: "40px"}}/>
                <div>
                    <p className={style.infoBrandTitle}>ПИВАНДОПАЛА</p>
                    <p className={style.infoBrandText}>Социальная сеть</p>
                </div>
            </div>
            <p className={style.infoText}>
                Социальная сеть «ПИВАНДОПАЛА» создана в 2022 году, наша цель — найти людей, любящих пиво!
            </p>
            <div className={style.infoLinkSocialNetwork}>
                <SocialNetwork href={"https://www.youtube.com/channel/UClo75epUOSoGrOpoZkg1onw"} icon={<YouTubeIcon/>}/>
                <SocialNetwork href={"https://github.com/pvndpl"} icon={<GitHubIcon/>}/>
                <SocialNetwork href={"https://vk.com/belython"} icon={<Icon28LogoVk/>}/>
            </div>
        </div>
    );
}

export default Information
import style from "./SocialNetwork.module.css";

const SocialNetwork = ({href, icon}) => {
    return (
        <a className={style.linkSocialNetwork}
           href={href}>{icon}</a>
    );
}

export default SocialNetwork
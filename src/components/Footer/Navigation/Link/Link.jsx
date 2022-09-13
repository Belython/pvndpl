import style from "./Link.module.css";


const LinkNavigationFooter = ({href, text}) => {
    return (
        <a href={href} className={style.navigationLink}>
            {text}
        </a>
    );
}

export default LinkNavigationFooter
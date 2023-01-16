import style from "./Navigation.module.css";
import {
    Icon36MessageOutline,
    Icon36Music,
    Icon36Picture, Icon36TearOffFlyerOutline,
    Icon36UserCircleOutline,
    Icon36Users,
    Icon36Users3Outline, Icon36Newsfeed
} from "@vkontakte/icons";
import {NavLink} from "react-router-dom";

const Navigation = (path) => {
        return (
            <div className={style.navigation}>
                <NavLink className={({isActive}) => isActive ? style.activeLink : style.navigationIcon} to={`${path.path}about`}>
                    <Icon36UserCircleOutline/>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? style.activeLink : style.navigationIcon} to={`${path.path}posts`}>
                    <Icon36TearOffFlyerOutline/>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? style.activeLink : style.navigationIcon} to={`${path.path}friends`}>
                    <Icon36Users/>
                </NavLink>
                <NavLink className={({isActive}) => isActive ? style.activeLink : style.navigationIcon} to={`${path.path}groups`}>
                    <Icon36Users3Outline/>
                </NavLink>
            </div>
        );
}

export default Navigation
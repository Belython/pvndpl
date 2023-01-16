import style from "./Navbar.module.css"
import FeedIcon from '@mui/icons-material/Feed';
import FaceIcon from '@mui/icons-material/Face';
import ChatIcon from '@mui/icons-material/Chat';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuItem from "./MenuItem/MenuItem";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.menu}>
                <MenuItem icon={<FaceIcon/>} text={"Моя страница"} path={"/pvndpl-front/content"}/>
                <MenuItem icon={<FeedIcon/>} text={"Новости"} path={"/pvndpl-front/newsfeed"}/>
                <MenuItem icon={<ChatIcon/>} text={"Сообщения"} path={"/pvndpl-front/messages"}/>
                <MenuItem icon={<GroupIcon/>} text={"Друзья"} path={"/pvndpl-front/friends"}/>
                <MenuItem icon={<GroupsIcon/>} text={"Люди"} path={"/pvndpl-front/groups"}/>
            </ul>
        </nav>
    );
}

export default Navbar
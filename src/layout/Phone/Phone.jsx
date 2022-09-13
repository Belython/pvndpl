import style from "./Phone.module.css"
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Menu from "../../components/Menu/Menu";
import {useState} from "react";
import FeedIcon from '@mui/icons-material/Feed';
import FaceIcon from '@mui/icons-material/Face';
import ChatIcon from '@mui/icons-material/Chat';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import {Route, Routes} from "react-router-dom";
import Messages from "../../components/Messages/Messages";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Friends from "../../components/Friends/Friends";
import Groups from "../../components/Groups/Groups";
import Musics from "../../components/Musics/Musics";
import Settings from "../../components/Settings/Settings";

const Phone = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value: "Моя страница", href: "/pvndpl-front/content", icon: <FaceIcon/>},
        {value: "Новости", href: "/pvndpl-front/newsfeed", icon: <FeedIcon/>},
        {value: "Сообщения", href: "/pvndpl-front/messages", icon: <ChatIcon/>},
        {value: "Друзья", href: "/pvndpl-front/friends", icon: <GroupIcon/>},
        {value: "Сообщества", href: "/pvndpl-front/groups", icon: <GroupsIcon/>},
        {value: "Музыка", href: "/pvndpl-front/musics", icon: <LibraryMusicIcon/>},
        {value: "Настройки", href: "/pvndpl-front/settings", icon: <SettingsIcon/>}]
    const updateActive = () => {
        setMenuActive(!menuActive)
    }
    return (
        <div className={style.App}>
            <Header updateActive={updateActive}/>
            <div className={style.content}>
                <Routes>
                    <Route path="/pvndpl-front/">
                        <Route path="content/*" element={<Content/>}/>
                        <Route path="newsfeed" element={<NewsFeed/>}/>
                        <Route path="messages/*" element={<Messages/>}/>
                        <Route path="friends" element={<Friends/>}/>
                        <Route path="groups" element={<Groups/>}/>
                        <Route path="musics" element={<Musics/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={"ПИВАНДОПАЛА"} items={items}/>
        </div>
    );
}

export default Phone
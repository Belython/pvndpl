import style from "./Desktop.module.css"
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Messages from "../../components/Messages/Messages";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Friends from "../../components/Friends/Friends";
import Groups from "../../components/Groups/Groups"
import Settings from "../../components/Settings/Settings";
import Musics from "../../components/Musics/Musics";

const Desktop = () => {
    return (
        <div className={style.App}>
            <Header/>
            <Navbar/>
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
            <Footer/>
        </div>
    );
}

export default Desktop
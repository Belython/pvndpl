import style from "./Content.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Navigation from "./Navigation/Navigation";
import About from "./About/About";
import { Routes, Route} from "react-router-dom";
import Posts from "./Posts/Posts";
import Photos from "./Photos/Photos";
import Friend from "./Friend/Friend";
import Group from "./Group/Group";

const Content = () => {
    return (
        <div className={style.content}>
            <div className={style.headerImg}>
            </div>
            <UserInfo/>
            <Navigation/>
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts/>} />
                <Route path="friends" element={<Friend/>} />
                <Route path="groups" element={<Group/>} />
                <Route path="photos" element={<Photos/>} />
            </Routes>
        </div>
    );
}

export default Content
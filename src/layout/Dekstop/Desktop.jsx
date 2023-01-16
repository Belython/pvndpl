import style from "./Desktop.module.css"
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Content/Content";
import UserContent from "../../components/UserContent/UserContent";
import Footer from "../../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Messages from "../../components/Messages/Messages";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Friends from "../../components/Friends/Friends";
import Groups from "../../components/Groups/Groups";
import Login from "../../components/Login/Login"
import Register from "../../components/Register/Register"
import Tags from "../../components/Tags/Friends"
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import axios from '../../redux/axios';

const Desktop = (props) => {
    const [username, setUsername] = useState();
    
    useEffect(() => {
        getConversations()
    }, [])

    const getConversations = (e) => {
        axios.get(
            '/profile',
            {
                headers: { Authorization: "Bearer ".concat(Cookies.get('JWT')) }
            }
        ).then(response => {
            setUsername(response)
        });
    }
    if(!!username){
    return (
        <div className={style.App}>
            <Header/>
            <Navbar/>
            <div className={style.content}>
                <Routes>
                    <Route path="/pvndpl-front/">
                        <Route path="content/*" element={<Content/>}/>
                        <Route path="users/:id/*" element={<UserContent/>}/>
                        <Route path="newsfeed" element={<NewsFeed/>}/>
                        <Route path="messages/*" element={<Messages messages={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                        <Route path="friends" element={<Friends/>}/>
                        <Route path="groups" element={<Groups/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="tag/*" element={<Tags/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
    } else{
        return(
            <div className={style.App}>
            <Header/>
            <div className={style.content}>
                Пожалуйста сделай регистрацию или войди реально
                <Routes>
                    <Route path="/pvndpl-front/">
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Desktop
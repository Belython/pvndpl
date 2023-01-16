import style from "./Login.module.css";
import './form.css'
import axios from '../../redux/axios';
import React from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formElement = document.getElementById('loginForm')
        const formData = new FormData(formElement);

        const username = formData.get("username")
        const password = formData.get("password")

        await axios.post(
            '/authenticate',
            JSON.stringify({"username": username, "password": password}),
            {
                headers: {"Content-Type": "application/json"}
            }
        ).then((response) => {
            document.cookie = 'JWT='.concat(response.data.token)
            window.location.href = 'http://localhost:3000/pvndpl-front/';
    })
    }

    return (
        <div className={style.vkloginHeader}>

            <p className={style.vkloginHeaderPretitle}>Добро пожаловать в</p>
            <p className={style.vkloginHeaderTitle}>ПИВАНДОПАЛУ</p>

            <div className={style.loginForm}>
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <h1>Заходи</h1>
                            <form id="loginForm" className="login" onSubmit={handleSubmit}>
                                <div className="login__field">
                                    <input type="text" name="username" className="login__input" placeholder="User name" />
                                </div>
                                <div className="login__field">
                                    <input type="password" name="password" className="login__input" placeholder="Пароль"/>
                                </div>
{/*                                 <Link className={style.headerBrand} to={"/pvndpl-front/content"}> */}
                                <button className="button login__submit">
                                    <span className="button__text">Зайти</span>
                                </button>
{/*                                 </Link> */}
                            </form>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login
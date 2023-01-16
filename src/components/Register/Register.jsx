import style from "./Register.module.css";
import './form.css'
import axios from "../../redux/axios";
import React from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formElement = document.getElementById('registerForm')
        const formData = new FormData(formElement);

        const username = formData.get("username")
        const password = formData.get("password")
        const email = formData.get("email")
        const firstName = formData.get("firstName")
        const secondName = formData.get("secondName")
        const token = document.cookie

        await axios.post(
            '/users',
            JSON.stringify({"username": username, "password": password, "email": email, "firstName": firstName, "secondName": secondName}),
            {
                headers: {"Content-Type": "application/json"}
            }
        ).then(console.log).catch(console.log)
        window.location.href = 'http://localhost:3000/pvndpl-front/content';
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
                            <form id="registerForm" className="login" onSubmit={handleSubmit}>
                                <div className="login__field">
                                    <input type="text" name="username" className="login__input" placeholder="User name" />
                                </div>
                                <div className="login__field">
                                    <input type="password" name="password" className="login__input" placeholder="Пароль" />
                                </div>
                                <div className="login__field">
                                    <input name="email" className="login__input" placeholder="email" />
                                </div>
                                <div className="login__field">
                                    <input  name="firstName" className="login__input" placeholder="имя" />
                                </div>
                                <div className="login__field">
                                    <input  name="secondName" className="login__input" placeholder="фамилия" />
                                </div>
{/*                                 <Link className={style.headerBrand} to={"/pvndpl-front/content"}> */}
                                <button className="button login__submit">
                                    <span className="button__text">Пажилая Регистрация</span>
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

export default Register
import style from "./Navigation.module.css";
import LinkNavigationFooter from "./Link/Link";


const Navigation = () => {
    return (
        <div>
            <p className={style.navigationText}>Запланировано</p>
            <div className={style.navigation}>
                <LinkNavigationFooter href={""} text={"Личная Страница"}/>
                <LinkNavigationFooter href={""} text={"Новости"}/>
                <LinkNavigationFooter href={""} text={"Страница Сообществ"}/>
                <LinkNavigationFooter href={""} text={"Страница Музыки"}/>
                <LinkNavigationFooter href={""} text={"Страница Фотографий"}/>
                <LinkNavigationFooter href={""} text={"Активность"}/>
                <LinkNavigationFooter href={""} text={"Друзья"}/>
                <LinkNavigationFooter href={""} text={"Настройки"}/>
            </div>
        </div>
    );
}

export default Navigation
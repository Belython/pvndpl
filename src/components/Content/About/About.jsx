import style from "./About.module.css";

const About = () => {
    return (
        <div className={style.main}>
            <div className={style.widgetBox}>
                <p className={style.mainTitle}>Обо мне</p>
                <p className={style.informationText}>Привет! Меня зовут Александр! У меня есть учетная запись GitHub,
                    где я заливаю
                    код.</p>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Дата создания</p>
                    <p className={style.informationText}> 10 август 2022</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Город</p>
                    <p className={style.informationText}> Санкт-петербург, Россия</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Сайт</p>
                    <a className={style.informationText}
                       href={"https://vk.com/belython"}> https://vk.com/belython</a>
                </div>
            </div>
            <div className={style.widgetBox}>
                <p className={style.mainTitle}>Интересы</p>
                <div>
                    <p className={style.interestsTitle}>Любимые ТВ шоу</p>
                    <p className={style.informationText}> Breaking Good, RedDevil, People of Interest, The Running
                        Dead, Found, American Guy, The Last Windbender, Game of Wars.</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Любимые Исполнители / Артисты</p>
                    <p className={style.informationText}> Iron Maid, DC/AC, Megablow, Kung Fighters, System of a
                        Revenge, Rammstown.</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Любимые фильмы</p>
                    <p className={style.informationText}> Goodfellas, The Green Mile, Casino</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Любимые книги</p>
                    <p className={style.informationText}> Goodfellas, 1984, Brave New World</p>
                </div>
                <div>
                    <p className={style.interestsTitle}>Любимые игры</p>
                    <p className={style.informationText}> The witcher, TES V: Skyrim, GTA, CS:GO, DOTA 2</p>
                </div>
            </div>
            <div className={style.widgetBox}>
                <p className={style.mainTitle}>Персональная информация</p>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Email</p>
                    <p className={style.informationText}> velikodnji@mail.ru</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>День рождение</p>
                    <p className={style.informationText}> 2 октября 2001</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Занятость</p>
                    <p className={style.informationText}> Web Developer</p>
                </div>
                <div className={style.informationLine}>
                    <p className={style.informationTitle}>Родной город</p>
                    <p className={style.informationText}> Волжский, Россия</p>
                </div>
            </div>
        </div>
    );
}

export default About;
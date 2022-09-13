import style from "./Header.module.css";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom";

const Header = ({updateActive}) => {
    const isPhone = useMediaQuery('(max-width:1439px)');
    if (isPhone) {
        return (
            <header className={style.header}>
                <div className={style.headerInformation}>
                    <Link className={style.headerBrand} to={"/pvndpl-front/content"}>
                        <SportsBarIcon className={style.logo} sx={{height: "32px", width: "32px"}}/>
                    </Link>
                    <div className={style.hamburger} onClick={() => {
                        updateActive()
                    }}>
                        <span className={style.hamburgerSpan}/>
                    </div>
                </div>
                <a href={"#"} className={style.login}>Войти</a>
            </header>
        );
    } else {
        return (
            <header className={style.header}>
                <div className={style.headerInformation}>
                    <Link className={style.headerBrand} to={"/pvndpl-front/content"}>
                        <SportsBarIcon className={style.logo} sx={{height: "32px", width: "32px"}}/>
                        <h1 className={style.headerBrandText}>ПИВАНДОПАЛА</h1>
                    </Link>
                </div>
                <a href={"#"} className={style.login}>Войти</a>
            </header>
        );
    }
}

export default Header
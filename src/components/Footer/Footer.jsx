import style from "./Footer.module.css";
import Information from "./Information/Information";
import Navigation from "./Navigation/Navigation";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Information/>
            <Navigation/>
        </footer>
    );
}

export default Footer
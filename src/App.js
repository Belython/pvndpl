import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Phone from "./layout/Phone/Phone";
import Desktop from "./layout/Dekstop/Desktop";


const App = () => {
    const isPhone = useMediaQuery('(max-width:1439px)');
    if (isPhone) {
        return <Phone/>;
    } else {
        return <Desktop/>;
    }
}

export default App;

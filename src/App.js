import './App.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Phone from "./layout/Phone/Phone";
import Desktop from "./layout/Dekstop/Desktop";


const App = (props) => {
    const isPhone = useMediaQuery('(max-width:1439px)');
    if (isPhone) {
        return <Phone state={props.state} dispatch={props.dispatch}/>;
    } else {
        return <Desktop state={props.state} dispatch={props.dispatch}/>;
    }
}

export default App;

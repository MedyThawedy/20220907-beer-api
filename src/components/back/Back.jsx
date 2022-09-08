import { Link } from "react-router-dom";
import './Back.css';
import back from '../assets/images/Back.png';
//https://www.codegrepper.com/code-examples/javascript/how+to+go+back+to+the+previous+page+on+button+click+react

const Back = () => {
    return (
        <div className="clsBack">
            <Link to="/AllProducts"><img src={back} alt="back" />
            </Link>
        </div>
    );
}
export default Back;
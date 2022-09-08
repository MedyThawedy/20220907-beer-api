import { Link } from "react-router-dom";
import './Navigation.css';
import logo from '../assets/images/Logo.png';
const Navigation = () => {
    return (
        <nav>
            <Link to="/Home"><img src={logo} alt="Logo" />
            </Link>
        </nav>
    );
}
export default Navigation;
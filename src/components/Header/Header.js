import { Link ,useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import './index.css'

const Header= () =>{
    let navigate=useNavigate();

    const onClickLogout =()=>{
        Cookies.remove('jwt-token')
        navigate('/auth')
    }


    return(
        <nav className="navbar-container">
            <div>
                <Link to="/">
                <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="logo"
                className="website-logo" />
                </Link>
            </div>
            <ul className="header-list-items">
                <Link className="link-item" to="/">
                    <li className="home-heading home">Home</li>
                </Link>
                <Link className="link-item" to="/jobs">
                    <li className="home-heading home">Jobs</li>
                </Link>
            </ul>
            <div>
                <button className="logout-button" type="button" onClick={onClickLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Header;
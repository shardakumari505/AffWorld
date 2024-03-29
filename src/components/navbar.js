import React from "react";
import './navbar.styles.scss';
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    componentDidMount() {
        window.addEventListener("scroll", this.handleScrollTop);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScrollTop);
    }

    handleScrollTop = () => {
        if (window.scrollY > 20) {
            document.querySelector(".navbar-container").className = "navbar-container scroll";
        }
        else {
            document.querySelector(".navbar-container").className = "navbar-container";
        }
    };

    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-container-md">
                    <Link className="navbar-text" to='/'><h3 className="navbar-text navbar-title">AffWorld</h3></Link>
                    <Link className="navbar-text" to='/login'><h3 className="navbar-text navbar-title">Login / Register</h3></Link>
                </div>
            </div>
        )
    }
}

export default Navbar;
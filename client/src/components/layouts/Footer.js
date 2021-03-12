import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const Footer = () => {
    return (
        <footer className="footer py-3 ft-ft">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-left">Copyright © Soul Mate 2021</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <a className="btn btn-dark btn-social mx-2" href="https://github.com/nahidankur"><i className="fab fa-github"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="https://facebook.com/nahidkarim.ankur"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/nahid-ankur-3b285a18a"><i className="fab fa-linkedin-in"></i></a>
                </div>
             
            </div>
        </div>
    </footer>
    )
}


export default Footer

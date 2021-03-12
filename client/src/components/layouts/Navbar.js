import React, { Fragment } from 'react'
import {Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import { logout} from '../../actions/auth'
import './navbar.css'

const Navbar = ({logout, auth : { isAuthenticated, loading }}) => {
   
    const authLinks = (
        <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/newsfeed">NewsFeed</Link></li>
        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/myprofile">My Profile</Link></li>
        <li className="nav-item"><Link className="nav-link js-scroll-trigger" onClick={logout} >Logout</Link></li>
      
    </ul>

    )

    const guestLinks = (
        <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/login">Login</Link></li>
        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/register">Register</Link></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://nahidankur.github.io">Developer Contact</a></li>
    </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top"  id="mainNav">
      <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/"><span className="text-info soul-mate"> Soul Mate</span></Link>

        
         
          <button className="navbar-toggler navbar-toggler-right bg-transparent" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars fa-2x mx-1"></i>
           
          </button>
          <div className='container'>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              {
                  !loading && (<Fragment> {isAuthenticated ? authLinks : guestLinks}  </Fragment>) 
              }
         
          </div>

          </div>
         
      </div>
  </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout}) (Navbar)

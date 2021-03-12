import React from 'react'
import {connect } from 'react-redux'
import { Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import { } from 'react-router-dom'
import './alert.css'


const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Redirect to='/newsfeed' />
    }
    return (
    
        <header className="masthead ld-pddf">
            <div className="container">
                <div className="masthead-subheading">Welcome To Soul Mate!</div>
                
                    <div className="masthead-heading text-uppercase too-not-ll">Friendship is the sunshine of life</div>
                    <div> 
                        <p className="frnd-hd uiod-fg">There are friends, there is family, and then there are friends that become your family. Soul Mate app is designed for you to stay connected with your beloved friends forever. Try it now.</p>
                    </div>
                    
                
                <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to='/register'>Register Now</Link>
            </div>
        </header>

    )
}
Landing.propTypes=  {
    isAuthenticated: PropTypes.bool

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps) (Landing)

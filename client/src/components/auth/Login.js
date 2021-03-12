import React, {useState} from 'react'
import { Link, Redirect} from 'react-router-dom'
import './register.css'
import { connect} from 'react-redux'
import {login} from '../../actions/auth'
import PropTypes from 'prop-types'


const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData]  = useState({
        
        email : '',
        password : ''
        

    })

    const { email, password } = formData

    const onSubmit = e =>{
        e.preventDefault()
        login(email, password)
        
    }

    if(isAuthenticated){
        return <Redirect to='/newsfeed' />
    }
    const onChange = e =>{
        setFormData( { ...formData, [e.target.name]: e.target.value } )
    }
    return (
        <div class="card card-container masti login-pddf">
        <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
        <p id="profile-name" class="profile-name-card"></p>
        <form class="form-signin" onSubmit={ e => onSubmit(e) }>
            <span  class="reauth-email"></span>
            <input   class="form-control" placeholder="Email address" required autofocus
            name='email' value={email} onChange={e => onChange(e)}
            />
           
            <input type="password" class="form-control" placeholder="Password" required
            name='password' value={password} onChange={e => onChange(e)}
            />
           
            <div id="remember" class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign In</button>
        </form>
        
            Don't have an account?
        
        <div>  <Link to="/register" class="forgot-password">
            Create a free account
        </Link>
        </div>
    </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login}) (Login)

import React, { Fragment, useState } from 'react'
import  { Link, Redirect } from 'react-router-dom'
import FileBase from 'react-file-base64'
import {setAlert } from '../../actions/alert'
import { connect} from 'react-redux'
import PropTypes from 'prop-types'
import { register} from '../../actions/auth'
import './register.css'


const Register = ({setAlert, register, isAuthenticated}) => {
 
    const [formData, setFormData]  = useState({
        name : '',
        email : '',
        password : '',
        password2 : '',
        picture : ''

    })

    const {name, email, password, password2, picture } = formData

    const onSubmit = e =>{
        e.preventDefault()
        if(password !== password2){
            setAlert('Password did not match', 'danger')
        } else {
            register({ name, email, password, picture })
        }

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
            <input type="text" class="form-control" placeholder="Full Name" required
            name='name' value={name} onChange={e => onChange(e)}
            />
            <input   class="form-control" placeholder="Email address" required autofocus
            name='email' value={email} onChange={e => onChange(e)}
            />
           
            <input type="password" class="form-control" placeholder="Password" required
            name='password' value={password} onChange={e => onChange(e)}
            />
            <input type="password" class="form-control" placeholder="Confirm Password" required
            name='password2' value={password2} onChange={e => onChange(e)}
            />
            <label >Upload a profile picture</label>
            <FileBase  type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, picture: base64 })} />
            
            <div id="remember" class="checkbox">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign Up</button>
        </form>
     
            Already have an account?
    
        <div>  <Link to="/login" class="forgot-password">
            Login
        </Link>
        </div>
    </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
    
}
const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { setAlert, register}) (Register)

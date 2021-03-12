import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import { getProfileById, getCurrentProfile} from '../../actions/profile'
import Spinner from '../layouts/Spinner'
import { Link } from 'react-router-dom'
import ProfileTop from './ProfileTop'

const Profile = ({ getCurrentProfile, profile: {profile, loading}, auth}) => {
    useEffect(()=> {
        getCurrentProfile()
    }, [getCurrentProfile])
    return (
        <Fragment>
            {profile === null && loading ? <Spinner/> : <Fragment> 
                {
                    profile !== null ? ( < ProfileTop profile= {profile} />) : (<Fragment>
                        <h2>You have no profile yet. Create a now first</h2>
                        <br/>
                        <Link to='/create-profile' className='btn btn-success'>Create Profile</Link>
                        </Fragment>)
                }
           
            

            </Fragment>}
        </Fragment>
    )
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile}) (Profile)

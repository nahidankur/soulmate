import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import { getProfileById} from '../../actions/profile'
import Spinner from '../layouts/Spinner'
import { Link } from 'react-router-dom'
import ProfileTop from './ProfileTop'


const PublicProfile = ({getProfileById, profile: {profile, loading}, auth, match}) => {
    useEffect(()=> {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])
    return (
                <Fragment>
        {profile === null && loading ? <Spinner/> : <Fragment> 
            {
                profile !== null ? ( < ProfileTop profile= {profile} />) : (<Fragment>
                    <h2>It's look like this user does not have a profile</h2>
                    <br/>
                    <Link to='/newsfeed' className='btn btn-success'>Go Back to Newsfeed</Link>
                    </Fragment>)
            }
       
        

        </Fragment>}
    </Fragment>
    )
}

PublicProfile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getProfileById}) (PublicProfile)

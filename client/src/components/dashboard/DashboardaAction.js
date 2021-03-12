import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom'

const DashboardaAction = () => {
    return (
      <div className='ml-2'>
        <div className='row'>
        <div className="mt-3">
        <Link to='/edit-profile'  className="mr-2 btn btn-primary btn-sm">Edit Profile</Link>
        <Link to='/add-education'  className="mr-2 btn btn-primary btn-sm">Add Education</Link>
        <Link to='/add-experience' className="mr-2 btn btn-primary btn-sm">Add Experience</Link>
      </div>

        </div>
     

      </div>
        

    
        
    )
}


export default DashboardaAction


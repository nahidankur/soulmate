import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link} from 'react-router-dom'
import { deleteExperience} from '../../actions/profile'
import {connect} from 'react-redux'

const ProfileExperience = ({ auth,deleteExperience ,experience : { _id, title, company, location, from , to, description }}) => {
    return (
        <div className="panel-body pb5">
        <hr className="short br-lighter"/>
      <div className="row about-arrange">
        
          <Link onClick={()=> deleteExperience(_id)} className="anchor-tag">  <span className="rounded-circle bg-red about-icon"><i className="fa fa-trash"></i></span> </Link>

      
        
      </div>
        <h6>Experience</h6>

        <h4>{title} at {company}</h4>
    <p class="text-muted"> Location: {location}
        <br/> From {moment(from).format('MM/DD/YYYY')} to {moment(to).format('MM/DD/YYYY')} 
        <br/>
        <p>{description} </p>
        </p>
      </div>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired

}
const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps, {deleteExperience}) (ProfileExperience)

import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'

const ProfileExperience = ({ experience : { _id, title, company, location, from , to, description }}) => {
    return (
        <div className="panel-body pb5">
        <hr className="short br-lighter"/>
      <div className="row about-arrange">     
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
    experience: PropTypes.array.isRequired

}
const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps) (ProfileExperience)

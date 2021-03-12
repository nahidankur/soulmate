import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import './default.css'
import './custom.css'
import {createProfile } from '../../actions/profile'
import {Link, withRouter } from 'react-router-dom'


const CreateProfile = ({createProfile, history}) => {

    const [formData, setFormData] = useState({
        profession: '',
        company: '',
        location: '',
        skills: '',
        bio: ''

    })

    const {profession, company, location, skills, bio } = formData

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value  })
    }

    const onSubmit = e => {
        e.preventDefault()
        createProfile(formData, history)
    }
    return (
        <div className="card">
   
            <div className="panel-heading">
                <h3 className="panel-title">Create Profile</h3>
            </div>
            <div className="panel-body">
                <form role="form" onSubmit={ e => onSubmit(e) }>
                  <div className="form-group">
                    <label>Select Professional Status</label>
                    <div className="col-sm-9">
                      <select name="profession" className="form-control mb-3" value={profession }
                      onChange={e => onChange(e)} 
                      >
                        <option disabled value="0">Select your status</option>
                        <option>Teacher</option>
                        <option>Doctor</option>
                        <option>Engineer</option>
                        <option>Instructor</option>
                        <option>Banker</option>
                        <option>Govt Employee</option>
                        <option>Developer</option>
                        <option>Junior Developer</option>
                        <option>Senior Developer</option>
                        <option>Banker</option>
                        <option>Intern</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="FullName">Current Work</label>
                    <div className="span-tag" ><small>could be your own company or one you work for</small></div>
                    <input type="text" value={company} name='company' onChange={e=> onChange(e)}  className="form-control"  />
                </div>
                    <div className="form-group">
                      <label for="FullName">Location</label>
                      <input type="text"  className="form-control"
                      value={location} name='location' onChange={e=> onChange(e)} 
                      />
                  </div>
                  <div className="form-group">
                    <label for="FullName">Professional Skills</label>
                    <div className="span-tag" ><small>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small></div>
                    <input type="text" className="form-control"
                    value={skills} name='skills' onChange={e=> onChange(e)}  
                    />
                </div>
                  
                    <div className="form-group">
                        <label for="AboutMe">Bio</label>
                        <textarea className="form-control" 
                        value={bio} name='bio' onChange={e=> onChange(e)} 
                        ></textarea>
                    </div>
                    <button className="btn btn-primary waves-effect waves-light w-md" type="submit">Save</button>
                </form>

            </div>
       
    </div>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}

export default connect(null, {createProfile}) (withRouter(CreateProfile))

import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import { Link, withRouter} from 'react-router-dom'
import {addExperience} from '../../actions/profile'

const AddExperience = ({history, addExperience}) => {
    const [formData, setFormData ] =  useState({
        title: '',
        company: '',
        location: '',
        from: '',
        to: '',
        description: ''

    })

    const { title, company, location, from, to, description } = formData

    const onChange = e=>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e=> {
        e.preventDefault()
        addExperience(formData, history)
    }
    return (
        <Fragment>
    
            <div className="card up-pb">
                    <div className="panel-heading">
                        <h3 className="panel-title">Edit Experience</h3>
                        <span className="smf"><small>* marked fields are required</small></span>
                    </div>
                    <div className="panel-body">
                        <form role="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <label for="FullName">Job Title *</label>
                                <input type="text" value={title} name='title' onChange={e=> onChange(e)}  className="form-control"/ >
                            </div>
                            <div className="form-group">
                                <label for="FullName">Company *</label>
                                <input type="text" value={company} name='company' onChange={e=> onChange(e)}  className="form-control"/ >
                            </div>
                            <div className="form-group">
                                <label for="FullName">Location *</label>
                                <input type="text" value={location} name='location' onChange={e=> onChange(e)}  className="form-control"/ >
                            </div>
                            <div className="form-group">
                              <label for="FullName">From Date</label>
                              <input type="date"  className="form-control"
                                    value={from} name='from' onChange={e=> onChange(e)}/>
                          </div>
                          <div className="form-group">
                            <label for="FullName">To Date</label>
                            <input type="date" className="form-control"
                                value={to} name='to' onChange={e=> onChange(e)}
                            />
                        </div>
                       
                     
                       
                          
                            <div className="form-group">
                                <label for="AboutMe">Job Description</label>
                                <textarea  className="form-control" 
                                value={description} name= 'description' onChange={e=> onChange(e)}
                                ></textarea>
                            </div>
                            <button className="btn btn-primary waves-effect waves-light w-md" type="submit">Save</button>
                            <Link to='/dashboard' className="btn ml-3 btn-secondary waves-effect waves-light w-md">Back</Link>
                        </form>
        
                    </div>
                
            </div>
         
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired

}

export default connect(null, {addExperience}) (withRouter(AddExperience))

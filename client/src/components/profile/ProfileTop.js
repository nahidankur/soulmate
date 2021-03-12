import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import ProfileEducation from './ProfileEducation'
import ProfileExperience from './ProfileExperience'
import './profiletop.css'
import { Link } from 'react-router-dom'

const ProfileTop = ({profile: { profession, company, location, bio, skills, education, experience }, auth: {user} }) => {
    return (
        <Fragment>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="bg-picture text-center mt-2">
                            <div className="bg-picture-overlay"></div>
                            <div className="profile-info-name">
                                
                                <img src={ user.picture ? user.picture :"noimg.png" } className="circle-forced" alt="Responsive image" />

                              
                                
                                <h3 className="text-white">{user.name && user.name}</h3>
                            </div>
                            <div className="profile-info-name text-white"> {profession && profession} at {company && company}</div>
                        </div>
                      
                    </div>
                </div>
                <div className="row user-tabs">
                    <div className="col-lg-6 col-md-9 col-sm-9">
               
                    </div>

                </div>


                <div class="row">
                    <div class="col-lg-12">

                        <div class="tab-content profile-tab-content">
                            <div>
                                <div class="row">
                                    <div class="col-md-4">
                                       
                                        <div class="card">
                                        
                                        <div class="panel panel-default panel-fill">
                                            <div class="panel-heading">
                                                <h3 class="panel-title">Personal Information</h3>
                                            </div>
                                            <div class="panel-body">
                                                <div class="about-info-p">
                                                    <strong>Full Name</strong>
                                                    <br/>
                                                    <p class="text-muted">{user.name && user.name}</p>
                                                </div>


                                                <div class="about-info-p m-b-0">
                                                    <strong>Location</strong>
                                                    <br/>
                                                    <p class="text-muted">{location && location}</p>
                                                </div>
                                            </div>
                                        </div>
                                            
                                    </div>
                                       

                                        
                                        <div class="card">
                                            <div class="card-body">

                                            <div class="panel-heading">
                                                <h3 class="panel-title">Professional Skills</h3>
                                            </div>

                                                <ul>
                                                    {
                                                     skills && skills.map((skill, index)=> (
                                                         <li key={index} > {skill} </li>
                                                     ))
                                                    }
                                                
                                                </ul>


                                    </div>
                                        </div>
                                    </div>

                                    <div class="col-md-8">
                                      
                                        <div class="card">
                                            <div class="card-body">

                                            <div class="panel-heading">
                                                <h3 class="panel-title">Biography</h3>
                                            </div>
                                            <div class="panel-body">
                                        {bio && bio}
                                            </div>

                                           </div>
                                    </div>
                                        <div class="card">
                                       
                                        <div class="panel">
                                          <div class="panel-heading row">
                                          <Link to='/add-education' className='btn rounded-circle bg-green mr-2'>+</Link>
                                            <h3 class="panel-title">Education</h3>
                                            
                                          </div>
                                    
                                           {education.length > 0 ? (<Fragment>
                                               {education.map(education => (
                                                   <ProfileEducation key={education._id} education={education} />
                                               ))}
                                           </Fragment>) : (<h4>No Educational Qualification</h4>)}
                                           

                                        </div>
                                        
                                        </div>


                                        <div class="card">
                                         
                                        <div class="panel">
                                          <div class="panel-heading row">
                                          <Link to='/add-experience' className='btn rounded-circle bg-green mr-2'>+</Link>
                                            <h3 class="panel-title">Experience</h3>
                                            
                                          </div>
                                           {experience.length > 0 ? (<Fragment>
                                               {experience.map(experience => (
                                                   <ProfileExperience key={experience._id} experience={experience} />
                                               ))}
                                           </Fragment>) : (<h4>No Experience</h4>)}
                                           
                
                                        </div>
                                       
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
        </Fragment>
        
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    auth : state.auth
})

export default connect(mapStateToProps) (ProfileTop)

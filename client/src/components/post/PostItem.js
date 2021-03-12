import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Link } from 'react-router-dom'

const PostItem = ({post: { name, picture, date, text }}) => {
    return (
      <Fragment>
            <div class="card cd-pdd">
              <div>
              <Link to='/newsfeed' class="btn btn-primary">Back to the Post</Link>
              </div>      
                </div>
                <div className='card'>
        <div className="mb-5">
          <div className="">
              <div className="mr-4">
              <Link href="#">
                  <div className='row'>
                  <img src={ picture ? picture : "/noimg.png" }  alt="person" className="mind-pic"/>
                  <span className='post-writer'><h5 >{name && name}</h5></span> 
                  </div>
                  </Link>
              
          </div>
            <div className="content">
              <span className="mt-3 mb-2">
                  <div className="text mb-2"><small> {moment(date && date).fromNow()}</small></div>
               
                 {text && text}
              </span>
              <div className="mb-2 mt-2">

          </div>
            

             
            </div>
          </div>

        

      </div>
  </div>
      </Fragment>
  
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired

}

export default PostItem

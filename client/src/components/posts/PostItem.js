import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addLike, removePost, removeLike} from '../../actions/post'
import moment from 'moment'
import './postpic.css'



const PostItem = ({addLike, removeLike, removePost, post: { _id, text, name, picture, likes, comments, date, user}, 
  auth
}) => {
    return (
        <div className="mb-5">
          <div className="">
              <div className="mr-4">
              <Link to={`/profile/${user}`}>
                  <div className='row'>
                  <img src={ picture ? picture : "/noimg.png" }  alt="person" className="circle-force"/>
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
              
                <div className="dekho">
                  <div>
                <span className="mr-2"><button onClick={e=> addLike(_id)} className="btn btn-sm btn-info"><i className="fa fa-thumbs-up mr-2"> </i> {likes.length > 0 && likes.length} {likes.length > 1 ? 'Likes': 'Like'}</button> 
                <button onClick={e=> removeLike(_id)} className="btn btn-sm btn-info ml-2"><i className="fa fa-thumbs-down mr-2"> </i></button>
                </span> 
                <span>
                  <Link to={`/post/${_id}`} className="btn btn-sm btn-secondary">
                    <i className="fa fa-comment mr-2"> </i> 
                    {comments.length > 0 && comments.length}  
                    </Link></span>
              </div>
              {
                  !auth.loading && auth.user._id === user && (
                    <button
                    onClick={()=> removePost(_id)}
                    className="btn btn-sm btn-danger"> <i className="fa fa-trash"></i></button>
                  )
              }
                
            </div>

             
            </div>
          </div>

        

      </div>
    )
}

PostItem.propTypes = {
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {addLike, removeLike, removePost}) (PostItem)

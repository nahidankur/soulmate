import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {deleteComment } from '../../actions/post'
import { Link} from 'react-router-dom'
import moment from 'moment'
import './postpic.css'

const CommentItem = ({postId,deleteComment, auth, comment: {_id, text, name, picture, user, date } }) => {
    return (
        <Fragment>
            <ul className="list-group">
            <li className="list-group-item">
            <div className="mt-4">
        <div className="item d-flex align-items-center">
         <div className="mr-4"><Link to={`/profile/${user}`}> <img src={ picture ? picture : "/noimg.png" } alt="..." className="mind-pic" /></Link></div>
         <div className="text">
            {text}
            <br />

             <small>commented {moment(date).fromNow()}   </small></div>
             
       </div>
       {
           !auth.loading && user === auth.user._id && (
            <div className="container-fluid btn-right">
            <button onClick={()=> deleteComment(postId,_id)} className="btn btn-sm btn-danger mb-4" >Delete</button>
          </div>

           )
       }
      
     </div>
     </li>
     </ul>
        
     


        </Fragment>
       
    )
}

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {deleteComment}) (CommentItem)

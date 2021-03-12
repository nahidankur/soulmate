import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getPosts } from '../../actions/post'
import Spinner from '../layouts/Spinner'
import PostsForm from './PostsForm'
import PostItem from './PostItem'

const Posts = ({post: { posts, loading }, getPosts}) => {
    useEffect(()=>{
        getPosts()
    }, [getPosts])
    
    return loading ? <Spinner /> : (<Fragment>
              
             <PostsForm />

                                            
            <div class="mt-5">

                <div class="row">
                 
                  <div class="col-lg-12">
                    <div className='card news-card'>
                    <h3 className='main-textt'>News Feed</h3>
                    </div>
                    <div class="card">
                      <div class="card-body no-padding">

                        {posts.map(post=> (
                         <PostItem key={post._id} post = {post} />
                        ))}

                      </div>
                    </div>
                  </div>


                </div>

            </div>
    </Fragment>)
}

Posts.propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts}) (Posts)

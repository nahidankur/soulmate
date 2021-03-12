import React, {Fragment, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Landing from './components/layouts/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/layouts/Alert'
import {loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoutes from './components/routing/PrivateRoutes'
import CreateProfile from './components/profile-form/CreateProfile'
import EditProfile from './components/profile-form/EditProfile'
import AddEducation from './components/profile-form/AddEducation'
import AddExperience from './components/profile-form/AddExperience'
import Profile from './components/profile/Profile'
import PublicProfile from './components/public-profile/PublicProfile'
import Posts from './components/posts/Posts'
import Post from './components/post/Post'
import Footer from './components/layouts/Footer'

// Redux
import { Provider } from 'react-redux'
import store from './store'

if(localStorage.token){
  setAuthToken(localStorage.token)

}

const  App = ()=> {
  
  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={ store } >
<Router>
  <Fragment>
    <Navbar />
    <Route exact path='/' component={ Landing } />
  
    <section className='container'>
      
      <Alert />
    <Switch>
    <Route exact path='/register' component={ Register } />
    <Route exact path='/login' component={ Login } />
    <PrivateRoutes exact path='/dashboard' component={ Dashboard } />
    <PrivateRoutes exact path='/create-profile' component={ CreateProfile } />
    <PrivateRoutes exact path='/edit-profile' component={ EditProfile } />
    <PrivateRoutes exact path='/add-education' component={ AddEducation } />
    <PrivateRoutes exact path='/add-experience' component={ AddExperience } />
    <PrivateRoutes exact path='/myprofile' component={ Profile } />
    <PrivateRoutes exact path='/profile/:id' component={ PublicProfile } />
    <PrivateRoutes exact path='/newsfeed' component={ Posts } />
    <PrivateRoutes exact path='/post/:id' component={ Post } />
    
    </Switch>

     
   

    </section>
    <Footer />
    
     
    
  </Fragment>
    </Router>
    </Provider>
    

  );
}

export default App;



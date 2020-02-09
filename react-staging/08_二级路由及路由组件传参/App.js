import React,{Component} from 'react'
import About from './pages/About'
import Home from './pages/Home'
import {NavLink,Switch, Route, Redirect} from 'react-router-dom'
export default class App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home" >Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
             <Switch>
                <Route path='/about' component={About}/>
                <Route path='/home' component={Home}/>
                <Redirect to="about"/>
             </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

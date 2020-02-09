import React, { Component } from 'react'
import HomeMessages from './Messages'
import HomeNews from './News'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div className="panel-body">
                <div>
                    <h2>Home组件内容</h2>
                    <div>
                        <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item" to="/home/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item"  to="/home/messages">Message</NavLink>
                        </li>
                        </ul>
                        <div>
                            <Switch>
                                <Route path="/home/news" component={HomeNews}/>
                                <Route path="/home/messages" component={HomeMessages}/>
                                <Redirect to="/home/news"/>
                            </Switch>
                        <button>回退</button>
                        <hr/>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessagesDetail from './HomeMessagesDetail'
export default class Messages extends Component {
    state = {
        messages:[]
    }
    componentDidMount(){
        setTimeout(()=>{
          this.setState({
              messages:[
                  {id:'001',thing:'好消息1'},
                  {id:'002',thing:'好消息2'},
                  {id:'003',thing:'好消息3'},
                  {id:'004',thing:'好消息4'},
              ]
          })
        },1000)
    }
    render() {
        return (
            <div>
            <ul>
                {
                    this.state.messages.map((mesOBJ)=>{
                    return <Link key={mesOBJ.id} to={`/home/messages/messageDetail/${mesOBJ.id}`}>{mesOBJ.thing}<br/></Link>
                    })
                }
            </ul>
            <br/>
            <Route path="/home/messages/messageDetail/:id" component={HomeMessagesDetail}/>
        </div>)
    }
}

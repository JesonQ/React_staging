import React, { Component } from 'react'
import Item from '../Item/item'
import './list.css'
import PubSub from 'pubsub-js'
export default class list extends Component {
    state = {
        isFirst:true,
        isLoading:false,
        error:'',
        users:[]
    }
    componentDidMount(){
        PubSub.subscribe("Pig",(msg,data)=>{
          this.setState(data)
        })
    }
    render() {
        let {isFirst,isLoading,error,users} = this.state
        if(isFirst){
            return <h2>请输入关键词!</h2>
        }else if(isLoading){
            return <h2>Please Wait,isLoading...</h2>
        }else if(error){
            return <h2>{error.message}</h2>
        }else{
           return (
            <div className="row">
                {
                    users.map((personObj)=>{
                        return <Item key={personObj.login} {...personObj} />
                    })
                }
            </div>
            ) 
        }
        
    }
}

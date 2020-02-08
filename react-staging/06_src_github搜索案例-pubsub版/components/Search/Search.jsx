import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    
    handelSearch = ()=>{
        let {value} = this.refs.name
        // console.log(value)
        PubSub.publish('Pig',{
            isFirst:false,
            isLoading:true,
        })
        axios.get("https://api.github.com/search/users",{params:{q:value}})
        .then(
            (response)=>{
                // console.log(response)
                PubSub.publish('Pig',{
                    isFirst:false,
                    isLoading:false,
                    users:response.data.items
                })
            },
            (error)=>{
                // console.log(error)
                PubSub.publish('Pig',{
                    error:error,
                    isFirst:false,
                    isLoading:false
                })
            }
        )
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref="name"/>&nbsp;<button onClick={this.handelSearch}>Search</button>
            </div>
        )
    }
}

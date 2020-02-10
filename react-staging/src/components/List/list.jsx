import React, { Component } from 'react'
import Item from '../Item/item'
import PubSub from "pubsub-js"
export default class list extends Component {
    state = {
        coms:[
            {id:'dfgd',name:'zs',content:'天气不错'},
            {id:'erte',name:'ls',content:'太阳当空照'},
        ]
    }
    componentDidMount(){
        PubSub.subscribe('hai',(msg,data)=>{

            let coms = this.state.coms
            coms.unshift(data)
            this.setState({
              coms
            })
            
        })
        
    }
    deleteContent = (ids)=>{
      let com = this.state.coms
      let coms =com.filter((item)=>{
        return item.id !== ids
      })
      this.setState({coms})
    }
    render() {
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        this.state.coms.map((person,index)=>{
                          return <Item deleteContent={this.deleteContent} key={index} id={person.id} name={person.name} content={person.content}/>
                        })
                    }
                    
                </ul>
        </div>
        )
    }
}

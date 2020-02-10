import React, { Component } from 'react'
import './item.css'
export default class item extends Component {
    delete = (id,name)=>{
      
      if(window.confirm(`确认删除${name}吗?`)){
            this.props.deleteContent(id)
      }
      
    }
    render() {
        let {id,name,content} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#2" onClick={()=>{this.delete(id,name)}}>删除</a>
                </div>
            <p className="user"><span >{name}</span><span>说:</span></p>
            <p className="centence">{content}</p>
            </li>
        )
    }
}

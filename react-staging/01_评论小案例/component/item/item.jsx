import React,{Component} from "react"

export default class Item extends Component{
    delete = (id,username)=>{
      //是否删除
      if(window.confirm(`您确定删除${username}吗?`)){
        this.props.DeleteComments(id)
      }
    }
    render (){
        let {id,username,content} = this.props
        return(
            <li className="list-group-item">
                <div className="handle">
                  <a href="#1" onClick={()=>{
                    this.delete(id,username)
                  }}>删除</a>
                </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
            </li> 
        )
    }
}


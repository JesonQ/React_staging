import React,{Component} from "react"
import uuid from "uuid"
import "./add.css"
export default class Add extends Component{
    add = ()=>{
      //1.获取用户输入内容
      let username = this.username.value
      let content = this.content.value
      //2.校验数据
      if(!username.trim() || !content.trim()){
        alert("请勿输入空白字符")
        return
      }
      //3.更新state
      let {AddComments} = this.props
      AddComments({
        id:uuid(),
        username,
        content
      })
      //4.清空输入框
      this.username.value = ""
      this.content.value = ""
    }
    render(){
        
        return (
            <div className="col-md-4">
              <form className="form-horizontal">
                <div className="form-group">
                  <label>用户名</label>
                  <input type="text" className="form-control" placeholder="用户名" ref={input => this.username = input}/>
                </div>
                <div className="form-group">
                  <label>评论内容</label>
                  <textarea className="form-control" rows="6" placeholder="评论内容" ref={input => this.content = input}></textarea>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                  </div>
                </div>
              </form>
            </div>
            
        )
    }
}
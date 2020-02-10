import React, { Component } from 'react'
import PubSub from "pubsub-js"
import uuid from "uuid"
export default class Add extends Component {
    submit = ()=>{
      let name = this.refs.name.value
      let content = this.refs.content.value
      PubSub.publish('hai',
            {
              id:uuid(),
              name:name,
              content:content
            }
      )
      this.refs.name.value = ''
      this.refs.content.value = ''
    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref="name"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                           <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>    
        )
    }
}

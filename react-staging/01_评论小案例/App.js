import React,{Component} from 'react';
import Add from "./component/add/add"
import List from "./component/list/list"

export default class App extends Component{
  state = {
   comments:[
     {id:"hewiuh832",username:"张三",content:"天气很好"},
     {id:"wqjodijq5",username:"王五",content:"天气不错"},
     {id:"nkds4jnk8",username:"李四",content:"天气很好"},
   ]
  }
  AddComments = (commentObj) => {
    let comments = this.state.comments
    comments.unshift(commentObj)
    this.setState({
      comments
    })

  }
  DeleteComments = (ids)=>{
    let {comments} = this.state
    comments = comments.filter((commentObj)=>{
      // console.log(id)
      return commentObj.id !== ids
    })
    this.setState({
      comments
    })
  }
  render(){
    return (
      <div id="app">
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <Add AddComments={this.AddComments}/>
            <List comments={this.state.comments} DeleteComments={this.DeleteComments}/>
           </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App extends Component {
    state = {
        content:'React通俗易懂,适合智商140以上学者学习',
        opacity:''
    }
    remove = ()=>{
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    componentDidMount(){
        let opacity1 = 1
        setInterval(()=>{
          opacity1 = opacity1 - 0.1
          if(opacity1 <= 0){
            opacity1 = 1
          }
          this.setState({
              opacity:opacity1
          })
        },200)
    }
    render() {
        return (
            <div>
                <h2 style={{opacity:this.state.opacity}}>{this.state.content}</h2>
                <button onClick={this.remove}>胡扯</button>
            </div>
        )
    }
}

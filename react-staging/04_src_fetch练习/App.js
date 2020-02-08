import React,{Component} from 'react';
import axios from 'axios';

export default class App extends Component{
  state = {
    isLoading:true,
    keyWord:'R',
    repoName:'',
    error:'',
    resUrl:''
  }
  componentDidMount(){
    fetch(`https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=starts`)
    .then(
      (response)=>{
        console.log(response)
        return response.json()
      }
    ).then(
      (response)=>{
        console.log(response)
        const {full_name,html_url} = response.items[0]
        this.setState({isLoading:false,repoName:full_name,resUrl:html_url})
      }
    ).catch(
      (error)=>{
        console.log(error)
        this.setState({isLoading:true,error})
      }
    )
  }
  render(){
    let {isLoading,repoName,resUrl,keyWord,error} = this.state
    if(isLoading){
      return <h2>isLoading</h2>
    }else if(error){
    return <h2>isLoading{error}</h2>
    }else{
      return (
        <h3>github上以[{keyWord}]开头点赞量最多的是<a href={resUrl}>{repoName}</a></h3>
      )
    }
  }
}



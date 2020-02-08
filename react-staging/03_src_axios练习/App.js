import React,{Component} from 'react';
import axios from "axios"
export default class App extends Component{
  state = {
    isLoading:true,
    repoName:'',
    resUrl:'',
    keyWord:'r',
    error:''
  }
  componentDidMount(){
    axios.get("https://api.github.com/search/repositories",{params:{q:this.state.keyWord,sort:"stars"}})
    .then(
      (response)=>{
        // console.log(response)
        const {name,html_url} = response.data.items[0]
        this.setState({
          isLoading:false,
          repoName:name,
          resUrl:html_url,
        })
      },
      (error)=>{
        this.setState({isLoading:false,error:error.message})
      }
      )
    }
    render(){
        let {isLoading,repoName,resUrl,keyWord,error} = this.state
        if(isLoading){
          return <h3>isLoading...</h3>
        }else if(error){
          return<h3>isLoading{error}</h3>
        }else{
            return (
              <h3>github上以[{keyWord}]开头点赞量最多的是<a href={resUrl}>{repoName}</a></h3>
            )
        }
        
    }
  }

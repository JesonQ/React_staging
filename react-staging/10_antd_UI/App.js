import React, { Component } from 'react'
import {Button,Input} from 'antd'

export default class App extends Component {
    render() {
        return (
            <div>
               <Button type="primary">点我一下</Button> 
               <Input></Input>
            </div>
        )
    }
}

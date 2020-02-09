import React, { Component } from 'react'

export default class HomeMessagesDetail extends Component {
    state = {
        date:[
            {id:'001',thing:'祝福1',content:'福如东海'},
            {id:'002',thing:'祝福2',content:'寿比南山'},
            {id:'003',thing:'祝福3',content:'健康长寿'},
            {id:'004',thing:'祝福4',content:'美丽如云'},
        ]
    }
    render() {
        let {id} = this.props.match.params
        let result = this.state.date.find((item)=>{
          return item.id === id
        })
        // console.log(result)
		return (
			<ul>
				<li>ID:{result.id}</li>
				<li>TITLE:{result.thing}</li>
				<li>content:{result.content}</li>
			</ul>
		)
    }
}

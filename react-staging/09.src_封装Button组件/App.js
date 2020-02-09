import React, { Component } from 'react'
import Button from './components/button/button'

export default class App extends Component {
	render() {
		return (
			<div>
				<h3>App</h3>
				<Button a='你' b='好' c='美'>
					Are you ok?
				</Button>
			</div>
		)
	}
}

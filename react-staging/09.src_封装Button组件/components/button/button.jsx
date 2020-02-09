import React, { Component } from 'react'
import './button.css'

export default class Button extends Component {
	render() {
		return <button {...this.props} className="btn"></button>	
	}
}

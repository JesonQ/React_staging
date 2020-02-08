import React, { Component } from 'react'

export default class item extends Component {
    render() {
        let {login,avatar_url,html_url} = this.props
        return (
        <div className="card">
            <a href={html_url} target="_blank" rel="noopener noreferrer">
                <img alt="头像" src={avatar_url} style={{width: '100px'}}/>
            </a>
        <p className="card-text">{login}</p>
        </div>
        )
    }
}

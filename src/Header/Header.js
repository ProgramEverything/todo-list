import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <div className="headerOuter">
        <input type='text' placeholder='写下待办任务并回车'/>
      </div>
    )
  }
}

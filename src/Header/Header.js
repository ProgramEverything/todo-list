import React, { Component } from 'react'
import "./Header.css"

export default class Header extends Component {
  keyUpHandler = (event) => {
    if (event.keyCode !== 13) return 
    this.props.father.setState({
      todoList: [{id: this.props.father.state.todoList.length, content: event.target.value, done: false}, ...this.props.father.state.todoList]
    })
    event.target.value = ""
  }

  render() {
    return (
      <div className="headerOuter">
        <input type='text' placeholder='写下待办任务并回车' onKeyUp={this.keyUpHandler}/>
      </div>
    )
  }
}

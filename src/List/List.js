import React, { Component } from 'react'
import "./List.css"
import ListItem from '../ListItem/ListItem'

export default class List extends Component {
  render() {
    return (
      <div className='outer'>
        {
            this.props.father.state.todoList.map((todo) => {
                return (
                    <ListItem key={todo.id} content={todo.content} done={todo.done} father={this.props.father} id={todo.id}/>
                )
            })
        }
      </div>
    )
  }
}

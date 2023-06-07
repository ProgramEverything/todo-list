import React, { Component } from 'react'
import "./List.css"
import ListItem from './ListItem/ListItem'

export default class List extends Component {
    state = {
        todoList : [
            "吃饭",
            "睡觉"
        ]
    }
  render() {
    return (
      <div className='outer'>
        {
            this.state.todoList.map((data, index) => {
                return (
                    <ListItem key={index} content={data}/>
                )
            })
        }
      </div>
    )
  }
}

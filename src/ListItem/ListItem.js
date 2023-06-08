import React, { Component } from 'react'
import "./ListItem.css"

export default class ListItem extends Component {
    state = {
        mouseOver: false
    }
    mouseHandler = (flag) => {
        if (flag) return () => {this.setState({mouseOver: true})}
        else return () => {this.setState({mouseOver: false})}
    }
    checkHandler = (event) => {
        let todoListNew = this.props.father.state.todoList
        todoListNew = todoListNew.map((current) => {
            if (current.id === this.props.id) {
                current.done = event.target.checked
            }
            return current
        })
        this.props.father.setState({
            todoList: todoListNew
        })
    }
    deleteHandler = () => {
        let todoListNew = this.props.father.state.todoList
        todoListNew = todoListNew.filter((value) => {
            if (value.id === this.props.id) {
                return false
            }
            return true
        })
        this.props.father.setState({
            todoList: todoListNew
        })
    }
    render() {
        return (
            <div className='listItemOuter'  style={{backgroundColor: this.state.mouseOver ? "lightgray" : "white"}} onMouseEnter={this.mouseHandler(true)} onMouseLeave={this.mouseHandler(false)}>
                <input className='listItemInput' type='checkbox' checked={this.props.done} onChange={this.checkHandler}/>
                <div className='listItemDiv' >{this.props.content}</div>
                <div className='listItemButton' style={{width: this.state.mouseOver ? "100px" : "0px"}} onClick={this.deleteHandler}>删除</div>
            </div>
        )
    }
}

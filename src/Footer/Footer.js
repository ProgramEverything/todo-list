import React, { Component } from 'react'
import "./Footer.css"

export default class Footer extends Component {
    deleteAllDone = () => {
        let todoListNew = this.props.father.state.todoList
        todoListNew = todoListNew.filter((current) => {
            return !current.done
        })
        this.props.father.setState({
            todoList: todoListNew
        })
    }
    checkAll = (event) => {
        let todoListNew = this.props.father.state.todoList
        todoListNew = todoListNew.map((current) => {
            current.done = event.target.checked
            return current
        })
        this.props.father.setState({
            todoList: todoListNew
        })
    }
    render() {
        let count = 0
        let allDone = true
        this.props.father.state.todoList.forEach((current) => {
            if (current.done) count++
            else allDone = false
        })
        if (this.props.father.state.todoList.length === 0) allDone = false
        return (
            <div className='FooterWrapper'>
                <input className='FooterInput' type='checkbox' onChange={this.checkAll} checked={allDone}/>
                <div className='FooterDiv'>已完成任务 {count} / 总任务 {this.props.father.state.todoList.length}</div>
                <div className='FooterButton' onClick={this.deleteAllDone}>删除所有已完成任务</div>
            </div>
        )
    }
}


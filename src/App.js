import React, { Component } from 'react'
import Header from "./Header/Header"
import List from "./List/List"
import Footer from "./Footer/Footer"
import "./App.css"

export default class App extends Component {
    state = {
        todoList: [
            {
                id: 0,
                content: "吃饭",
                done: true
            },
            {
                id: 1,
                content: "睡觉",
                done: true
            }
        ]
    }
    render() {
        // Header借助传进去的this操作App的state，引发App的重新渲染，子组件List也一起重新渲染了
        return (
            <div className='appWrapper'>
                <Header father={this}/>
                <List father={this}/>   
                <Footer father={this}/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import "./ListItem.css"

export default class ListItem extends Component {
    render() {
        return (
            <div className='listItemOuter'>
                <div className='listItemOuterLeft'>
                    <input className='listItemInput' type='checkbox' />
                    <div className='listItemDiv'>{this.props.content}</div>
                </div>
                <div className='listItemButton'>删除</div>
            </div>
        )
    }
}

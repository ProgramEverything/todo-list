import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header/Header"
import List from "./List/List"

ReactDOM.render(
    (
        <div style={{width:"300px", margin:"0px auto"}}>
            <Header/>
            <List/>
        </div>
    ),
    document.querySelector("#app")
)
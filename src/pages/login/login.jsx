import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import logo from './img/logo.png'
import './css/login.css'

export default class Login extends Component {
    render() {
        return (
            <div id="login">
                <div className="header">
                    <h1>
                        <img src={logo} alt=""/>
                    </h1>
                    <h1>商品管理系统</h1>
                </div>
                <div className="content">
                    <h1>用户登陆</h1>
                    <div>
                        antd表单
                    </div>
                </div>
            </div>
        )
    }
}

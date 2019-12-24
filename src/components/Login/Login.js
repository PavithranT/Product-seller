import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import Cookie from 'js-cookie'
import { makeAPICall } from '../../utils/API';
import { routePath, apiURL } from '../../Constant/Constant';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passcode: '',
            isLoginFailed: false
        };

    }


    changeHandler = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    handleSubmit = async event => {
        event.preventDefault();
        const { history } = this.props
        const { username, passcode } = this.state
        const url = apiURL.login
        const response = await makeAPICall('postRequest', { url, reqObj: { username, passcode } })
        if (response) {
            Cookie.set('token', response.token)
            history.push(routePath.home)
        } else {
            this.setState({ isLoginFailed: true });
        }

    }

    render() {
        const { isLoginFailed } = this.state
        console.log('isLoginFailed', isLoginFailed)
        return (
            <div className='loginLayout' >

                <form>
                    {isLoginFailed && <span>Invalid Username/Password</span>}
                    <p>Username:</p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.changeHandler}
                    />

                    <p>passcode:</p>
                    <input
                        type='password'
                        name='passcode'
                        onChange={this.changeHandler}
                    />

                    <button type="submit" onClick={this.handleSubmit} >Sign in</button>
                </form>
            </div>
        );
    }
}


export default withRouter(Login);
import React , {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Chatbox from '../chatbox/Chatbox';
import postData from '../helperfunctions/postdata';
import './Login.css'
const url = "https://0924b73d.ngrok.io/api/auth/token";
const data = {
	login: "Kevinandres",
	password: "123"
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     
    handleSubmit(e) {
        e.preventDefault();
    }
     
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render(){
        const onClickLogin = () => {
            postData(url, data).then((token) => {
                localStorage.setItem("token", token);
            })
        }
        return(
            <form onSubmit={this.handleSubmit}>
    <article className="Login">
        <main className="">
                <fieldset id="sign_up" className="">
                    <legend className="">Sign In</legend>
                    <div className="margin10">
                        <label className="" htmlFor="email-address">Email</label>
                        <input className="" type="email" name="email" id="email-address" onChange={this.handleInputChange} value={this.state.email}/>
                    </div>
                    <div className="margin10">
                        <label className="" htmlFor="password">Password</label>
                        <input className="" type="password" name="password" id="password" onChange={this.handleInputChange} value={this.state.password}/>
                    </div>
                </fieldset>
                <div className="margin10">
                    <button 
                    onClick={() => onClickLogin()} //on route change
                    className="boton" 
                    value="Sign in">Sign in</button>
                </div>
        </main>
        </article >
        </form>
        )
    }
}

export default Login;
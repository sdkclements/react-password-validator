import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React Password Validator</h2>
        </div>
        <p className="App-intro">
            Please Sign In:
        </p>
          <PassForm />
      </div>
    );
  }
}

class PassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            confirmPass:''

        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const email = event.target.email
        const password = event.target.password
        const confirmPass = event.target.confirmPass
        this.setState(
            {
                [email]: event.target.value,
                [password]: event.target.value,
                [confirmPass]: event.target.value
            });
    }


    handleSubmit(event) {
        if (event.target.password.value === event.target.confirmPass.value){
        alert('Passwords Match');
        }
        else {alert('passwords do not match')}
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input name='email' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input name='password' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                    ConfirmPassword:
                    <input name='confirmPass' type="text" value={this.state.value} onChange={this.handleChange} />
                </label>


                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default App;

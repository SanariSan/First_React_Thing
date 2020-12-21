import React from 'react';
import zxcvbn from 'zxcvbn';

export class Form extends React.Component {

    initialState = {
        email: '',
        password: '',
        passwordStrength: 0,
        passwordHint: '',
        errorEmail: '',
        errorPassword: '',
        showPass: false,
        selectedCountry: 'ru'
    }

    state = this.initialState;

    handleInput = (event) => {
        const isCheckbox = event.target.type === 'checkbox' ? true : false;
        let passwordHint = '';
        let passwordStrength = 0;

        if (event.target.name === 'password') {
            let result = zxcvbn(event.target.value);

            passwordStrength = result.score;
            passwordHint = result.feedback.warning;
        }

        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value,
            passwordHint: passwordHint,
            passwordStrength: passwordStrength
        })
    }

    validateForm = () => {
        let testRegex = /^\S+@\S+\.\S+$/;
        let errorEmail = '';
        let errorPassword = '';

        if (this.state.email.length < 1 || this.state.email.length > 100) {
            errorEmail = 'Email lenght 1 to 100 chars';
        }
        else if (!testRegex.test(this.state.email)) {
            errorEmail = 'Email have to be word@word.word';
        }

        if (this.state.password.length < 1 || this.state.password.length > 100) {
            errorPassword = 'Password length 1 to 100';
        }

        if (errorEmail || errorPassword) {
            this.setState({
                errorEmail,
                errorPassword
            });

            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const isValid = this.validateForm();

        if (isValid) {
            alert('Good');
            this.setState(this.initialState);
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Hello, {this.state.email !== '' ? this.state.email : 'Guest'}</h1>
                <p>email: <input
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInput} /></p>
                <p className='error'>{this.state.errorEmail}</p>
                <p>Password: <input
                    type={this.state.showPass ? 'text' : 'password'}
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInput} />
                </p>
                <meter max='4' id='password-strength-meter' value={this.state.passwordStrength}></meter>
                <p style={{
                    color: 'cyan'
                }}>{this.state.passwordHint}</p>
                <p className='error'>{this.state.errorPassword}</p>
                <p>Select country: <select
                    name='selectedCountry'
                    value={this.state.selectedCountry}
                    onChange={this.handleInput}>
                    <option>ru</option>
                    <option>ua</option>
                    <option>au</option>
                    <option>usa</option>
                    <option>other</option>
                </select></p>
                <p>Show password: <input
                    type='checkbox'
                    name='showPass'
                    checked={this.state.showPass}
                    onChange={this.handleInput} /></p>
                <button type='submit'>Send</button>
                <br />
                <textarea
                    style={{
                        width: 300,
                        height: 150
                    }}
                    value={JSON.stringify(this.state, null, '\t')}
                    readOnly>
                </textarea>
            </form>
        )
    }
}
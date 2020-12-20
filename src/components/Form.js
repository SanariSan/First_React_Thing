import React from 'react';

export class Form extends React.Component {
    state = {
        login: '',
        password: '',
        showPass: false,
        selectedCountry: 'ru'
    }

    handleInput = (event) => {
        const isCheckbox = event.target.type === 'checkbox' ? true : false;

        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Event submit handled');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Hello, {this.state.login !== '' ? this.state.login : 'Guest'}</h1>
                <p>Login: <input
                    name='login'
                    value={this.state.login}
                    onChange={this.handleInput} /></p>
                <p>Password: <input
                    type={this.state.showPass ? 'text' : 'password'}
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInput} />
                </p>
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
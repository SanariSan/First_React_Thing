import React from 'react';

export class Form extends React.Component {
    state = {
        login: '',
        password: '',
        selectedCountry: 'ru'
    }

    handleLoginInput = (evt) => {
        this.setState({
            login: evt.target.value
        })
    }

    handlePasswordInput = (evt) => {
        this.setState({
            password: evt.target.value,
        })
    }

    handleCheckbox = (evt) => {
        this.setState({
            showPass: evt.target.checked
        })
    }

    handleCountryInput = (evt) => {
        this.setState({
            selectedCountry: evt.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.login !== '' ? this.state.login : 'Guest'}</h1>
                <p>Login: <input value={this.state.login} onChange={this.handleLoginInput} /></p>
                <p>Password: <input
                    value={
                        this.state.password
                    }
                    onChange={this.handlePasswordInput} />
                </p>
                <p>Select country: <select value={this.state.selectedCountry} onChange={this.handleCountryInput}>
                    <option>ru</option>
                    <option>ua</option>
                    <option>au</option>
                    <option>usa</option>
                    <option>other</option>
                </select></p>
                <textarea 
                    style={{
                        width: 300,
                        height: 150
                    }} 
                    value={JSON.stringify(this.state, null, '\t')}></textarea>
            </div>
        )
    }
}
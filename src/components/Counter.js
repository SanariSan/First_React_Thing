import React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initNumber
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease = () => {
        this.setState((prevVal) => ({
            count: prevVal.count - 1
        }))
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increase}>increase</button>
                <button onClick={this.decrease}>decrease</button>
            </div>
        )
    }
}
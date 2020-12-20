import React from 'react';
import { Counter } from "./Counter";

export class Counters extends React.Component {

    state = {
        countersAmount: 0
    }

    getCounters = () => {
        let arr = [];
        for (let i = 0; i < this.state.countersAmount; i++) {
            arr.push(<Counter initNumber={0} />);
        }
        return arr;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({
                    countersAmount: this.state.countersAmount + 1
                })}>
                    add Counter
                </button>
                
                <button onClick={() => {
                    if (this.state.countersAmount > 0) {
                        this.setState({
                            countersAmount: this.state.countersAmount - 1
                        })
                    }
                }}>
                    remove Counter
                </button>

                {this.getCounters()}
            </div>
        )
    }
}
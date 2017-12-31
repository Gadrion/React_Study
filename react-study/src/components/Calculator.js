import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calcResult: 0
        };
        this.onBtnClick = this.onBtnClick.bind(this);
    };
    render() {
        return (
        <div className="Calculator">
            <Display text={ this.state.calcResult }/>
            <Button onBtnClick={ this.onBtnClick }>+</Button>
            <Button onBtnClick={ this.onBtnClick }>-</Button>
        </div>
        );
    }

    onBtnClick(name) {
        const calcResult = this.state.calcResult;
        switch(name) {
            case '+':
                this.setState({
                     ...this.state,
                     calcResult : calcResult + 1
                });
            break;
            case '-':
                this.setState({
                     ...this.state, 
                     calcResult : calcResult - 1
                });
            break;
            default:
        }
    }
}

export default Calculator;

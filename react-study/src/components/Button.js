import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <button className="Button" onClick={ this.onClick }>{ this.props.children }</button>
        );
    }

    onClick() {
        this.props.onBtnClick(this.props.children);
    }
}

// Button.propTypes = {
//     text: React.PropTypes.string
// };

export default Button;

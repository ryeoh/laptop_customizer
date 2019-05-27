import React, {Component} from 'react';
import './Selections.css';

export default class Selections extends Component {
    render() {
        return (
            <div className="summary__option" key={this.props.objectKey}>
                <div className="summary__option__label">{this.props.objectKey}</div>
                <div className="summary__option__value">{this.props.selected[this.props.objectKey].name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.selected[this.props.objectKey].cost) }
                </div>
            </div>
        )
    }
}
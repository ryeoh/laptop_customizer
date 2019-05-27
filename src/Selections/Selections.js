import React, {Component} from 'react';
import './Selections.css';

export default class Selections extends Component {
    render() {
        return (
            <div className="summary__option" key={this.props.name}>
                <div className="summary__option__label">{this.props.name}</div>
                <div className="summary__option__value">{this.props.selected[this.props.name].name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.selected[this.props.name].cost) }
                </div>
            </div>
        )
    }
}
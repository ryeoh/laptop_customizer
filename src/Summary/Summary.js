import React, {Component} from 'react';
import Totals from '../Totals/Totals';
import Selections from '../Selections/Selections';

export default class Summary extends Component {
    render() {
        const summary = Object.keys(this.props.selected)
              .map(key => 
              <Selections 
                selected={this.props.selected} 
                objectKey={key} />)
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <Totals selected={this.props.selected} />
            </section>
        )
    }
}
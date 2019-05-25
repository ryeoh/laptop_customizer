import React, {Component} from 'react';
import Feature from '../Feature/Feature';

export default class FeaturesList extends Component {
    render() {
        const features = Object.keys(this.props.features)
          .map(key => 
            <Feature 
                features={this.props.features}
                selected={this.props.selected} 
                key={key}
                name={key}
                onSelect={this.props.onSelect}
             />
          );      

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
        )
    }
}
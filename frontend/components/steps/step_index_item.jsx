import React from 'react';


class StepIndexItem extends React.Component {

    render () {

        const {step, num_step} = this.props;

        if(!step) {
            return null
        }

        return (
            <div className="step-container">
                <h2 className="step-title">{`Step ${num_step + 1}: ${step.title}`}</h2>
                <img className="step-photo" src="" alt="" />
                <p>{step.body}</p>
                <div className="bottom-line"></div>
            </div>
        )
    }
}

export default StepIndexItem;



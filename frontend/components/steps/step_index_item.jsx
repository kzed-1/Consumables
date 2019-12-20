import React from 'react';


class StepIndexItem extends React.Component {

    render () {

        const {step, num_step} = this.props;

        if(!step) {
            return null
        }

        let picture;

        if (!step.photosUrls) {
            // debugger
            picture = window.pancakes
        } else {
            picture = step.photosUrls[0]
        }
        let component;

        if(step.title.length === 0 || step.body.length === 0){
            component = null
        }else {
            // debugger
            component = <div className="step-container">
                <h2 className="step-title">{`Step ${num_step + 1}: ${step.title}`}</h2>
                <img className="step-photo" src={picture} alt="" />
                <p className="step-body" >{step.body}</p>
                <div className="bottom-line"></div>
            </div>
        }

        return (
            <div>
                {component}
            </div>
        )
    }
}

export default StepIndexItem;



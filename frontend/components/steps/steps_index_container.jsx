import React from 'react';
import {connect} from 'react-redux';
import StepIndexItem from './step_index_item';



class StepsIndex extends React.Component {

    componentDidMount () {
        this.props.grabRecipe(this.props.recipe.id)
    }

  
    render () {

        const {steps} = this.props;

        if(!steps) {
            return null;
        }

        let stepsList = steps.map((step, i) => (
            <StepIndexItem  key={`step-${step.id}`} num_step={i} step={step}/>
        ))

        return (
            <div className="steps-index">
                {stepsList}
            </div>
        )
    }
    
}


const msp = (state) => {
    // debugger;
    return {
    // recipe: state.entities.recipe,
    steps: Object.values(state.entities.steps)
}};



export default connect(msp)(StepsIndex);




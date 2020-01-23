import React from 'react';
import {connect} from 'react-redux';
import StepIndexItem from './step_index_item';
import { getAllSteps } from '../../reducers/selectors';



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


const msp = (state, ownProps) => {
    return {
    // recipe: state.entities.recipe,
    steps: Object.values(state.entities.steps)
    // steps: getAllSteps(state, ownProps),
}};



export default connect(msp)(StepsIndex);




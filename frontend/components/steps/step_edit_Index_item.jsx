import React from 'react';

class StepEditIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handledelete= this.handledelete.bind(this)
    }


    handledelete (e) {
        e.stopPropagation();
        const { deleteStep, step } = this.props
        deleteStep(step.id)
    }

    render() {

        const {editStep, step} = this.props

        return (
            <div onClick={()=>editStep(step.id)}>
                <div className="edit-step-pic-box"></div>
                <div>{`step ${i+1}: ${step.title}`}</div>
                <p>{step.body}</p>
                <button onClick={this.handledelete(e)}>X</button>
            </div>
        )
    }
}

export default StepEditIndexItem; 
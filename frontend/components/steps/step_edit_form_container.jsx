import { connect } from 'react-redux';
// import { editRecipe, grabRecipe } from '../../actions/recipes_actions';
import React from 'react';
import { openModal } from '../../actions/modal_action';
import { grabStep, editStep} from '../../actions/steps_action';
import {Link} from 'react-router-dom'



class StepEditForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: "",
            recipe_id: "",
            title: "",
            body: "",
            photos: []
        }

        this.setStateStep = this.setStateStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    setStateStep () {
        const {id, recipe_id, title, body} = this.props.step
        this.setState({id: id, recipe_id: recipe_id, title: title, body: body, photos: []})
    }

    componentDidMount() {
        // debugger
        this.props.grabStep(this.props.match.params.stepId)
            .then(()=> this.setStateStep())
        // debugger
    }

    // componentDidUpdate (prevProps, prevState) {
    //     if (prevState.recipes.entities.recipes)
    // }

    handleFile(e) {
        return this.setState({ photos: e.currentTarget.files })
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        const { history, step} = this.props
        e.preventDefault();
        const formData = new FormData();
        formData.append('step[title]', this.state.title)
        formData.append('step[body]', this.state.body)
        formData.append('step[recipe_id]', this.state.recipe_id)
        debugger
        for (let i = 0; i < this.state.photos.length; i++) {
            // debugger
            formData.append('step[photos][]', this.state.photos[i])
        }




        if (this.state.title.length === 0 || this.state.body.length === 0){
            this.props.openModal("update")
        }else {

            $.ajax({
                method: 'PATCH',
                url: `/api/steps/${this.state.id}`,
                data: formData,
                contentType: false,
                processData: false
            }).then(() => history.push(`/recipes/${step.recipe_id}/edit`), () => this.props.openModal("update"))
            // this.props.editStep(this.state)
            //     .then(() => history.push(`/recipes/${step.recipe_id}/edit`), () => this.props.openModal("update"))
        }
    }

    



    render () {
        // debugger;
        const {step} = this.props

        if (!step) {
            return null;
        }

        return (
            <div>
                <form className="edit-step-form" >
                    <div className="edit-step-form-header">
                        <div className="edit-step-pic-box">
                            <input multiple onChange={this.handleFile} type="file" />
                        </div>
                        <div className="edit-step-bottom-pic-bar">
                            {/* <input className="-button" type="submit" value="Publish" /> */}
                            <button className="view-all-button"><Link to={`/recipes/${step.recipe_id}/edit`}>📢  View all</Link></button>
                            <button className="edit-step-submit-button"><Link  to={`/recipes/${step.recipe_id}`}>Publish</Link></button>
                        </div>

                    </div>
                    <div className ="edit-step-title-body-container">
                        <div className="edit-step-pic-smaller-box"></div>
                        <input 
                            onChange={this.handleInput('title')}
                            value={this.state.title}
                            placeholder="Type your title..."
                            type="text"
                            className="edit-step-title-box"
                        />
                        <textarea 
                            className="edit-step-body-box"
                            onChange={this.handleInput('body')}
                            value={this.state.body}
                        />
                        <button onClick={this.handleSubmit} className="save-button">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}





const msp = (state, ownProps) => ({
    step: state.entities.steps[ownProps.match.params.stepId]
})

const mdp = (dispatch) => ({
    grabStep: (stepId) => dispatch(grabStep(stepId)),
    editStep: (step) => dispatch(editStep(step)),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(StepEditForm);



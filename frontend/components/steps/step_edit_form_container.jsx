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
            photos: [],
            photoUrls: [null]
            // highlighted: false
            // photoUrl: null
        }

        this.setStateStep = this.setStateStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.openFileInputWindow = this.openFileInputWindow.bind(this);
        this.fileInputRef = React.createRef();
        // this.onDragOver = this.onDragOver.bind(this);
        // this.onDragLeave = this.onDragLeave.bind(this);
        // this.onDrop = this.onDrop.bind(this);
    }

    setStateStep () {
        const {id, recipe_id, title, body} = this.props.step
        this.setState({id: id, recipe_id: recipe_id, title: title, body: body, photos: []})
    }

    componentDidMount() {
        this.props.grabStep(this.props.match.params.stepId)
            .then(()=> this.setStateStep())
    }

    // componentDidUpdate (prevProps, prevState) {
    //     if (prevState.recipes.entities.recipes)
    // }


    // handleFiles(e) {
    //     const file = e.currentTarget.files[0]
    //     const fileReader = new FileReader();
    //     fileReader.onloadend = () => {
    //         this.setState({ photos: file, photoUrl: fileReader.result})
    //     }


    //     if (file){
    //         fileReader.readAsDataURL(file);
    //     }else {
    //         this.setState({photos: [], photoUrl: null })
    //     }
    // }

    handleFiles(e) {
        const files = Object.values(e.currentTarget.files)
        const filesArray = []

        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                filesArray.push(URL.createObjectURL(files[i]))
            }
        } else {
            this.setState({ photos: [], photoUrls: [null] })
        }
        debugger
        this.setState({ photos: Object.values(e.currentTarget.files), photoUrls: filesArray })
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

        for (let i = 0; i < this.state.photos.length; i++) {        
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

    openFileInputWindow () {
        this.fileInputRef.current.click();
    }

    // onDragOver(e) {
    //     e.preventDefault();

    //     this.setState({highlighted: true})
    // }

    // onDragLeave(e) {
    //     this.setState({highlighted: false})
    // }    

    // onDrop(e) {
    //     e.preventDefault();

    //     (e) => this.handleFiles(e)
        
    //     this.setState({highlighted: false})

    // }



    render () {
        const {step} = this.props
        const preview = this.state.photoUrls.length > 0 ? 
            <div className="multi-preview">
                {(this.state.photoUrls || []).map((url,i) => (
                    // <img src={url} alt="..." />
                    <img key ={i} className="preview-pic" src={url} /> 
                ))}
            </div>
            : null;
        // const preview = this.state.photoUrl ? <img  className="preview-pic" src={this.state.photoUrl} alt="..." /> : null;
        if (!step) {
            return null;
        }

        

        return (
            <div>
                <form className="edit-step-form" >
                    <div className="edit-step-form-header">
                        <div 
                            className={`edit-step-pic-box dropzone ${this.state.highlighted? 'highlighted': ""}`} 
                            onClick={this.openFileInputWindow}
                            // onDragOver={this.onDragOver}
                            // onDragLeave={this.onDragLeave}
                            // onDrop={this.onDrop}
                        > <p className={`add-images ${this.state.photoUrls[0]? "picture-present": ""}`}>➕Click To Add Images</p>
                            <input ref ={this.fileInputRef} className = "fileInput" multiple onChange={this.handleFiles} type="file" />
                            {preview}
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



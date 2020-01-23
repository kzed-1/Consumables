import { connect } from 'react-redux';
// import { editRecipe, grabRecipe } from '../../actions/recipes_actions';
import React from 'react';
import { openModal } from '../../actions/modal_action';
import { grabStep, editStep} from '../../actions/steps_action';
import {Link} from 'react-router-dom';



class StepEditForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: "",
            recipe_id: "",
            title: "",
            body: "",
            photos: [],
            photoUrls: [null], 
            savedPhotoUrls: [null]
            // highlighted: false
            // photoUrl: null
        }

        this.setStateStep = this.setStateStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.openFileInputWindow = this.openFileInputWindow.bind(this);
        this.removePreviewPic = this.removePreviewPic.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.fileInputRef = React.createRef();
        // this.onDragOver = this.onDragOver.bind(this);
        // this.onDragLeave = this.onDragLeave.bind(this);
        // this.onDrop = this.onDrop.bind(this);
    }

    setStateStep () {
        const {id, recipe_id, title, body, photosUrls} = this.props.step
        this.setState({id: id, recipe_id: recipe_id, title: title, body: body, photos: [], savedPhotoUrls: photosUrls})
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

    deleteImage (e, attachment_id) {
        const {step, history} = this.props
        e.stopPropagation();
        e.preventDefault();

        const formData = new FormData();
        formData.append('attachment_id', attachment_id)


        $.ajax({
            method: 'DELETE',
            url: `/api/steps/${this.state.id}`,
            data: formData,
            contentType: false,
            processData: false
        }).then(() => history.push(`/recipes/${step.recipe_id}/edit`))
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

    removePreviewPic (event, photoUrlIndex) {
        event.stopPropagation();
        const photoUrlsArray = this.state.photoUrls;
        const photosArray = this.state.photos;
        photosArray.splice(photoUrlIndex, 1)
        photoUrlsArray.splice(photoUrlIndex, 1)
        this.setState({photoUrls: photoUrlsArray, photos: photosArray})
   
    }





    render () {
        const {step} = this.props
   
        const preview = this.state.photoUrls[0] ? 
            <div className="multi-preview">
                {(this.state.photoUrls || []).map((url,i) => {
                    // <img src={url} alt="..." />
                    const {images} = this.props
                    return <div key ={i} className="preview-pic-wrapper">
                        <img key={i} className="preview-pic" src={url} />
                        {/* <button className="remove-preview-button image-present" onClick={(event) => this.removePreviewPic(event, i)}>remove pic</button> */}
                        <img src={window.deleteButton} className="remove-preview-button image-present delete-pic-button" onClick={(event) => this.removePreviewPic(event, i)}></img>
                        {/* <button onClick={(e) => this.deleteImage(e, step.stepImages[i])} >delete pic from backend</button> */}
                    </div>
                })}
            </div>
            : null;
        // const preview = this.state.photoUrl ? <img  className="preview-pic" src={this.state.photoUrl} alt="..." /> : null;
        
        const savedPreview = this.state.savedPhotoUrls[0] ?
            <div className="multi-preview">
                {(this.state.savedPhotoUrls || []).map((url, i) => {
                    // <img src={url} alt="..." />
                    const { images } = this.props
                    return <div key={i} className="preview-pic-wrapper">
                        <img key={i} className="preview-pic" src={url} />
                        {/* <button className="remove-preview-button image-present" onClick={(event) => this.removePreviewPic(event, i)}>remove pic</button> */}
                        <img className="delete-pic-button" src={window.deleteButton} onClick={(e) => this.deleteImage(e, step.stepImages[i])}alt=""/>
                        {/* <button className="delete-pic-button" onClick={(e) => this.deleteImage(e, step.stepImages[i])} >delete pic from backend</button> */}
                    </div>
                })}
            </div>
            : null;
        
        if (!step) {
            return null;
        }

        let previewPresent = savedPreview ? "edit-step-pic-smaller-box present" : "edit-step-pic-smaller-box"

        

        return (
            <div>
                <form className="edit-step-form" >
                    <div className="edit-step-form-header">
                        <div 
                            // className={`edit-step-pic-box dropzone ${this.state.highlighted? 'highlighted': ""}`} 
                            className={`edit-step-pic-box dropzone ${preview? 'present': ""}`} 
                            onClick={ preview ?  null : this.openFileInputWindow}
                            // onDragOver={this.onDragOver}
                            // onDragLeave={this.onDragLeave}
                            // onDrop={this.onDrop}
                        > 
                            <p className={`add-images ${this.state.photoUrls[0]? "picture-present": ""}`}>➕Click To Add Images</p>
                            <input ref ={this.fileInputRef} className = "fileInput" multiple onChange={this.handleFiles} type="file" value=""/>
                            {preview}
                        </div>
                        <div className="edit-step-bottom-pic-bar">
                            {/* <input className="-button" type="submit" value="Publish" /> */}
                            <button className="view-all-button"><Link to={`/recipes/${step.recipe_id}/edit`}>📢  View all</Link></button>
                            <button className="edit-step-submit-button"><Link  to={`/recipes/${step.recipe_id}`}>Publish</Link></button>
                        </div>

                    </div>
                    <div className ="edit-step-title-body-container">
                        <div className={previewPresent}>
                            {savedPreview}
                        </div>
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
    step: state.entities.steps[ownProps.match.params.stepId],
    images: state.entities.images
})

const mdp = (dispatch) => ({
    grabStep: (stepId) => dispatch(grabStep(stepId)),
    editStep: (step) => dispatch(editStep(step)),
    openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(StepEditForm);



import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editRecipe, grabRecipe } from '../../actions/recipes_actions';
import { withRouter } from 'react-router-dom';
import RecipeEditForm from './recipe_edit_form';
import { openModal } from '../../actions/modal_action';


class RecipeEditStepZero extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            author_id: "",
            title: "",
            body: "", 
            photos: [],
            photoUrls: [null],
            savedPhotoUrls: [null],
            loader: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setStateRecipe = this.setStateRecipe.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.openFileInputWindow = this.openFileInputWindow.bind(this);
        this.fileInputRef = React.createRef();
        this.removePreviewPic = this.removePreviewPic.bind(this);
        this.renderLoader = this.renderLoader.bind(this);
        // this.handleUpdateSubmission = this.handleUpdateSubmission.bind(this);

    }

    setStateRecipe() {

        const { id, author_id, title, body, photosUrls } = this.props.recipe
        this.setState({ id: id, author_id: author_id, title: title, body: body, photos: [], savedPhotoUrls: photosUrls, loader: "" })
    }

    componentDidMount() {
        this.props.grabRecipe(this.props.match.params.recipeId)
            .then(() => this.setStateRecipe())
    }

    componentWillUnmount() {
        this.setState({loader: ""})
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        const { history, recipe } = this.props
        e.preventDefault();
        this.setState({ loader: "open" })
        const formData = new FormData();
        formData.append('recipe[title]', this.state.title)
        formData.append('recipe[body]', this.state.body)
        formData.append('recipe[author_id]', this.state.author_id)

        for (let i = 0; i <this.state.photos.length; i++){
            formData.append('recipe[photos][]', this.state.photos[i])
        }

        if (this.state.photos.length === 0 && this.state.savedPhotoUrls.length === 0) {
            this.props.openModal("update")
            this.setState({loader: ""})
        }else {
            $.ajax({
                method: 'PATCH',
                url: `/api/recipes/${this.state.id}`,
                data: formData,
                contentType: false,
                processData: false
            }).then(() => history.push(`/recipes/${recipe.id}/edit`), () => this.props.openModal("update"));
        }


        // this.props.editRecipe(this.state)
        //     .then(() => history.push(`/recipes/${recipe.id}/edit`), () => this.props.openModal("update"))
    }

    // handleFile (e) {
    //     return this.setState({photos: e.currentTarget.files })
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

    openFileInputWindow() {
        this.fileInputRef.current.click();
    }

    removePreviewPic(event, photoUrlIndex) {
        event.stopPropagation();
        const photoUrlsArray = this.state.photoUrls;
        const photosArray = this.state.photos;
        photosArray.splice(photoUrlIndex, 1)
        photoUrlsArray.splice(photoUrlIndex, 1)
        this.setState({ photoUrls: photoUrlsArray, photos: photosArray })
    }

    deleteImage(e, attachment_id, photoIndex) {
        const {history} = this.props
        e.stopPropagation();
        e.preventDefault();

        const formData = new FormData();
        formData.append('attachment_id', attachment_id)

        $.ajax({
            method: 'DELETE',
            url: `/api/recipes/${this.state.id}`,
            data: formData,
            contentType: false,
            processData: false
        })
        const dupArray = this.state.savedPhotoUrls.slice()
        dupArray.splice(photoIndex, 1)
        this.setState({ savedPhotoUrls: dupArray})
    }

    renderLoader () {
        if(this.state.loader) {
            return (
                <div className="loader"></div>
            )
        }else {
            return null
        }
    }

    render() {


        const { recipe, errors } = this.props;
        if (!recipe) {
            return null;
        }
        let errorslist = errors.map((error, i) => (
            <li className={`error-${i}`} key={i}>{error}</li>
        ))

        // const preview = this.state.photoUrls.length > 0 ?
        //     <div className="multi-preview">
        //         {(this.state.photoUrls || []).map((url, i) => (
        //             // <img src={url} alt="..." />
        //             <img key={i} className="preview-pic" src={url} />
        //         ))}
        //     </div>
        //     : null;

        const preview = this.state.photoUrls[0] ?
            <div className="multi-preview">
                {(this.state.photoUrls || []).map((url, i) => {
                    // <img src={url} alt="..." />
                    const { images } = this.props
                    return <div key={i} className="preview-pic-wrapper">
                        <img key={i} className="preview-pic" src={url} />
                        {/* <button className="remove-preview-button image-present" onClick={(event) => this.removePreviewPic(event, i)}>remove pic</button> */}
                        <img src={window.deleteButton} className="remove-preview-button image-present delete-pic-button" onClick={(event) => this.removePreviewPic(event, i)}></img>
                        {/* <button onClick={(e) => this.deleteImage(e, step.stepImages[i])} >delete pic from backend</button> */}
                    </div>
                })}
            </div>
            : null;


        const savedPreview = this.state.savedPhotoUrls[0] ?
            <div className="multi-preview">
                {(this.state.savedPhotoUrls || []).map((url, i) => {
                    // <img src={url} alt="..." />
                    const { images } = this.props
                    return <div key={i} className="preview-pic-wrapper">
                        <img key={i} className="preview-pic" src={url} />
                        {/* <button className="remove-preview-button image-present" onClick={(event) => this.removePreviewPic(event, i)}>remove pic</button> */}
                        <img className="delete-pic-button" src={window.deleteButton} onClick={(e) => this.deleteImage(e, recipe.recipeImages[i], i)} alt="" />
                        {/* <button className="delete-pic-button" onClick={(e) => this.deleteImage(e, step.stepImages[i])} >delete pic from backend</button> */}
                    </div>
                })}
            </div>
            : null;

        return (
            <div>
                {/* {this.renderLoader()} */}
                <div className={`loader ${this.state.loader}`}></div>
                <form className="edit-form" >
                    <div className="form-header">
                        <div className={`pic-box dropzone ${preview ? "present" : ""}`} onClick={ preview ? null : this.openFileInputWindow}>
                            <p className={`add-images ${this.state.photoUrls[0] ? "picture-present" : ""}`}>➕Click To Add Images</p>
                            <input ref={this.fileInputRef} multiple onChange={this.handleFiles} className="fileInput" type="file"/>
                            {preview}
                        </div>
                        <div className="bottom-pic-bar">
                            <button className="view-all-button"><Link to={`/recipes/${recipe.id}/edit`}>📢 View all</Link></button> 
                            <button className="edit-submit-button"><Link to={`/recipes/${recipe.id}`}>Publish</Link></button> 
                            {/* <input className="edit-submit-button" type="submit" value="Publish" /> */}
                        </div>

                    </div>
                    {errorslist}
                    <div className ="title-body-container">
                        <div className={`pic-box-2 ${this.state.savedPhotoUrls[0] ? "present" : ""}`}>
                            {savedPreview}
                        </div>
                        <input 
                            onChange={this.handleInput('title')}
                            value={this.state.title}
                            placeholder="Type your title..."
                            type="text"
                            className="edit-title-box"
                        />
                        <textarea 
                            className="edit-body-box"
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
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    errors: state.errors.recipes
})

const mdp = (dispatch) => ({
    grabRecipe: (recipeId) => dispatch(grabRecipe(recipeId)),
    editRecipe: (recipe) => dispatch(editRecipe(recipe)),
    openModal: (modal) => dispatch(openModal(modal))

})

export default withRouter(connect(msp, mdp)(RecipeEditStepZero));




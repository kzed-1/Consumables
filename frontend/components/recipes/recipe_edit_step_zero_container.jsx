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
            photoUrls: [null]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setStateRecipe = this.setStateRecipe.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.openFileInputWindow = this.openFileInputWindow.bind(this);
        this.fileInputRef = React.createRef();

    }

    setStateRecipe() {

        const { id, author_id, title, body } = this.props.recipe
        this.setState({ id: id, author_id: author_id, title: title, body: body, photos: [] })
    }

    componentDidMount() {
        this.props.grabRecipe(this.props.match.params.recipeId)
            .then(() => this.setStateRecipe())
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        const { history, recipe } = this.props
        e.preventDefault();
        const formData = new FormData();
        formData.append('recipe[title]', this.state.title)
        formData.append('recipe[body]', this.state.body)
        formData.append('recipe[author_id]', this.state.author_id)

        for (let i = 0; i <this.state.photos.length; i++){
            // debugger
            formData.append('recipe[photos][]', this.state.photos[i])
        }
        // debugger
        $.ajax({
            method: 'PATCH',
            url: `/api/recipes/${this.state.id}`,
            data: formData,
            contentType: false,
            processData: false
        }).then(() => history.push(`/recipes/${recipe.id}/edit`), () => this.props.openModal("update"));

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

    render() {


        const { recipe, errors } = this.props;

        if (!recipe) {
            return null;
        }
        let errorslist = errors.map((error, i) => (
            <li className={`error-${i}`} key={i}>{error}</li>
        ))

        const preview = this.state.photoUrls.length > 0 ?
            <div className="multi-preview">
                {(this.state.photoUrls || []).map((url, i) => (
                    // <img src={url} alt="..." />
                    <img key={i} className="preview-pic" src={url} />
                ))}
            </div>
            : null;

        return (
            <div>
                <form className="edit-form" >
                    <div className="form-header">
                        <div className="pic-box dropzone" onClick={this.openFileInputWindow}>
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
                        <div className="pic-box-2"></div>
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




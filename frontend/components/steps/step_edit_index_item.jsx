import React from 'react';
import { Link } from 'react-router-dom';



class StepEditIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photosUrls: this.props.step.photosUrls
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.emptyBody = this.emptyBody.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.renderPreview = this.renderPreview.bind(this);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.step.photosUrls !== this.props.step.photosUrls) {
            this,this.setState({photosUrls: this.props.step.photosUrls})
        }
    }

    handleEdit() {
        const { history, step } = this.props
        history.push(`/steps/${step.id}/edit`)
    }

    emptyBody() {
        const { step } = this.props
        if (step.body.length > 0 || step.title.length >0) {
            return "active"
        } else {
            return "inactive"
        }
    }

    handleOpenModal(e) {
        e.stopPropagation();
        const { step } = this.props
        this.props.openModal(`deleteStep-${step.id}`)
    }

    renderPreview() {
        const preview = this.state.photosUrls[0] ?
            <div className="multi-preview">
                {(this.state.photosUrls || []).map((url, i) => {
                    return <div key={i} className="preview-pic-wrapper">
                        <img key={i} className="preview-pic" src={url} />
                    </div>
                })}
            </div>
            : null;
        return preview;
    }



    render() {


        const { step } = this.props

        let clickToEdit;

        const photopresent = (this.state.photosUrls[0]) ? "picture-present-step-edit" : ""


        if (step.body.length > 0 || step.title.length > 0) {
            clickToEdit = ""
        } else {
            clickToEdit = "(click to edit)";
        }

        return (
            <div className={`step-segment-${this.emptyBody()}`} onClick={this.handleEdit}>
                <div className={`edit-step-pic-second-box ${photopresent}`} >
                    {this.renderPreview()}
                </div>
                <div className="title-description-wrapper">
                    <Link className="link-to-edit-step-title-description" to={`/steps/${step.id}/edit`}>{`Step ${this.props.i + 1}: ${clickToEdit}${step.title}`}</Link>
                    <p className="edit-step-body" >{step.body}</p>
                </div>
                <div className="step-buttons">
                    <div className="drag-icon">☰</div>
                    <div onClick={this.handleOpenModal} className="close-icon">✕</div>
                </div>
                <div className="arrow-wrapper">
                    <div className="placeholder"></div>
                    <img src={window.carat} className="arrow-icon"></img>
                    <div className="placeholder"></div>
                </div>
            </div>
        )
    }
}

export default StepEditIndexItem; 
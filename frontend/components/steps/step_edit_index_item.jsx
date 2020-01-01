import React from 'react';
import { Link } from 'react-router-dom';



class StepEditIndexItem extends React.Component {
    constructor(props) {
        super(props)
        // this.handledelete = this.handledelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        this.emptyBody = this.emptyBody.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }


    // handledelete() {
    //     event.stopPropagation();
    //     const { deleteStep, step } = this.props
    //     deleteStep(step.id)
    // }

    handleEdit() {
        const { history, step } = this.props
        history.push(`/steps/${step.id}/edit`)
    }

    // handleDelete(event) {
    //     event.stopPropagation();
    //     this.props.deleteStep(this.props.step.id)
    // }


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



    render() {

        const { step } = this.props

        let clickToEdit;

        if (step.body.length > 0 || step.title.length > 0) {
            clickToEdit = ""
        } else {
            clickToEdit = "(click to edit)";
        }

        return (
            <div className={`step-segment-${this.emptyBody()}`} onClick={this.handleEdit}>
                <div className="edit-step-pic-second-box"></div>
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
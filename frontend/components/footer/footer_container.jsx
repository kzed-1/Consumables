import React from 'react';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_action';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="footer">
                <div className="footer-items">

                    <div className="footer-icons-wrapper">
                        <Link to="/"><img className="favicon" src={window.favicon} alt="" /></Link>

                        <div className="sources-wrapper">
                            <h1 className="sources">Sources</h1>
                            <p className="photo-source">Photos by <a className="upsplash-link" target="_blank" href={"https://unsplash.com/@brandless"}>Brandless</a> on <a className="upsplash-link" href={"https://unsplash.com/"}>Unsplash</a></p>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@miracletwentyone"}>Joseph Gonzalez</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@tents_and_tread"}>Thomas Tucker</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                        </div> 
                        <div className="sources-wrapper">
                            <h1 className="sources">Sources</h1>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@hugoaitken"}>Hugo Aitken</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@calumlewis"}>Calum Lewis</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@heftiba"}>Toa Heftiba</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                        </div>
                        <div className="sources-wrapper">
                            <h1 className="sources">Sources</h1>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@jurienh"}>jurien huggins</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@stri_khedonia"}>Alice Pasqual</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                            <p className="photo-source">Photos by <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/@mat_graphik"}>Jordane Mathieu</a> on <a className="upsplash-link"  target="_blank" href={"https://unsplash.com/"}>Unsplash</a></p>
                        </div>

                        <div className="about-us-wrapper">
                            <h1 className="about-consumable">About Consumables</h1>
                            <Link className="about-us-link" to="/about">Who We Are</Link>
                        </div>
                        <div className="find-us-links-wrapper">
                            <h1 className="find-us-title">Find Us</h1>
                            <div className="link-wrappers-footer">
                                <a className="follow-me-link"  target="_blank" href="https://kzed-1.github.io/">
                                    <img className="portfolio-logo" src={window.bag} alt="" />
                                </a>
                                <a className="follow-me-link"  target="_blank" href="https://www.linkedin.com/in/kenel-zhao-961575165/">
                                    <img className="linkedin-logo" src={window.linkedin} alt="" />
                                </a>
                                <a className="follow-me-link"  target="_blank" href="https://github.com/kzed-1">
                                    <img className="github-logo" src={window.github} alt="" />
                                </a>
                                <a className="follow-me-link"  target="_blank" href="https://angel.co/kenel-zhao">
                                    <img className="angellist-logo" src={window.angellist} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                    <div className="img-link" >Icons made by <a  target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a  target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
        )
    }
}

const mdp = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(null,mdp)(Footer);
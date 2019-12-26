import React from 'react';


class StepIndexItem extends React.Component {

    render () {

        const {step, num_step} = this.props;

        if(!step) {
            return null
        }

        // let picture = null

        // if (!step.photosUrls) {
            
        // } else {
        //     picture = step.photosUrls[0]
        // }

        let component;
        let imageContainer;

        // debugger
        let imagesList = step.photosUrls.map((url, i) => {
            // debugger
            const flexStyle1 = {
                flex: 1.33
            }

            const flexStyle2 = {
                flex: .64
            }

            if (i === 0) {
                return <div key={i}  style={flexStyle1} className="image-wrapper"><img className="step-photo-item" src={url} /></div>
            }else {
                return <div key={i} style= {flexStyle2} className={`image-wrapper ${i}`}><img className="step-photo-item" src={url}/></div>
            }
        })

        if (step.photosUrls.length > 1) {
            imageContainer = <div className="image-box-container">
                {imagesList}
            </div>
        }else {
            imageContainer = imagesList
        }

        if(step.title.length === 0 || step.body.length === 0){
            component = null
        }else {
            // debugger
            component = <div className="step-container">
                <h2 className="step-title">{`Step ${num_step + 1}: ${step.title}`}</h2>
                {/* <img className="step-photo" src={picture} alt="" /> */}
                {imageContainer}
                <p className="step-body" >{step.body}</p>
                <div className="bottom-line"></div>
            </div>
        }



        return (
            <div>
                {component}
            </div>
        )
    }
}

export default StepIndexItem;



import React from 'react';
import ImagesStepItem from './images_step_item';



function ImagesStepIndex (props) {

    const {images} =  props

    let imagesList = images.map((image, i) => (
        <ImagesStepItem image={image} key={i} />
    ))

    return (
        <div className="image-box-container">
            {imagesList}
        </div>
    )

}

const msp = (state) => ({
    
})

export default ImagesStepIndex;
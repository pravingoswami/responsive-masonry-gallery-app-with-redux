import React from 'react'
import { connect } from 'react-redux'
import MultipleImagesShow from './MultipleImagesShow'
import { startEditImage } from '../actions/imagesActions'


function ImagesWithoutDataa(props){

    const handleSubmit = (id, formData) => {
        props.dispatch(startEditImage(id, formData))
    }
    return(
        <div>
            <h1>{'Images Without Data'.toUpperCase()}</h1>
            <div className = "banner-section container" >
                <div className = "text-section">
                    <h2>Image Gallary</h2>
                    <p>The internet’s source of freely usable images.
                    Powered by creators everywhere.</p>
                </div>

            </div>
            <MultipleImagesShow images = {props.images && props.images} handleSubmit = {handleSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images : state.images
    }
}

export default connect(mapStateToProps)(ImagesWithoutDataa)
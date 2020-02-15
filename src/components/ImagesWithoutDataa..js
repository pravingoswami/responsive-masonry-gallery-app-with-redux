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
            <h1>Images Without Data</h1>
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
import React from 'react'
import { connect } from 'react-redux'
import MultipleImagesShow from './MultipleImagesShow'
import { startEditImage } from '../actions/imagesActions'


function ImagesWithDataa(props){

    return(
        <div>
            <h1>Images with Data</h1>

            <MultipleImagesShow images = {props.images && props.images}  />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images : state.images
    }
}

export default connect(mapStateToProps)(ImagesWithDataa)
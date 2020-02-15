import axios from 'axios'


export const setImages = (images) => {
    return {
        type : 'SET_IMAGES',
        payload : images
    }
}

export const startSetImages = () => {
    return (dispatch) => {
        axios.get('https://picsum.photos/v2/list?page=2&limit=30')
            .then(response => {
                // console.log(response.data)
                localStorage.setItem("images", JSON.stringify(response.data))
                console.log(JSON.parse(localStorage.getItem('images')))
                dispatch(setImages(JSON.parse(localStorage.getItem('images'))))
                // dispatch(setImages(response.data))
            })
            .catch(err => console.log(err))
    }
}

const editImage = (id, formData) => {
    return {
        type : "EDIT_IMAGE",
        payload : {id, formData}
    }
}

export const startEditImage = (id, formData, redirect) => {
    return(dispatch) => {
        let images = JSON.parse(localStorage.getItem('images'))
        images = images.map(img => {
            if(img.id === id){
                return {...img, ...formData}
            } else {
                return {...img}
            }
        })
        localStorage.setItem("images", JSON.stringify(images))
        // dispatch(editImage(id, formData))
        console.log('updated',images)
        // dispatch(editImage(id, formData))
        dispatch(setImages(JSON.parse(localStorage.getItem('images'))))


        // redirect()
    }
}
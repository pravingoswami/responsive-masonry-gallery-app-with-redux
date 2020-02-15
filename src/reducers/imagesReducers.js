const imagesInitialState = []

const imagesReducers = (state = imagesInitialState, action) => {
    switch(action.type){

        case 'SET_IMAGES' : {
            return [...action.payload]
        }

        case 'EDIT_IMAGE' : {
            return state.map(img => {
                if(img.id == action.payload.id){
                    return {...img, ...action.payload.formData}
                } else {
                    return {...img}
                }
            })
        }

        default : {
            return state
        }
    }
}

export default imagesReducers
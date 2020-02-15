const imagesInitialState = []

const imagesReducers = (state = imagesInitialState, action) => {
    switch(action.type){

        case 'SET_IMAGES' : {
            return [...action.payload]
        }
        default : {
            return state
        }
    }
}

export default imagesReducers
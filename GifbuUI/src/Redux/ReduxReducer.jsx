import {
    SELECTED_GIFIMAGE,
  }
  from './ReduxActionContants';

const initialState = {
    SelectedGifImage : "Dosya Yolu",
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case SELECTED_GIFIMAGE:{
            return {
                ...state, SelectedGifImage: action.payload
              }
        }
        default: return state;
    }
}

export default rootReducer;
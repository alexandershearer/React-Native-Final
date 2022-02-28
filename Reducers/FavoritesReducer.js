import { combineReducers } from 'redux';


const INITIAL_STATE = {
    current: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default combineReducers({
    favorites: favoritesReducer
})
import favoritesReducer from "./FavoritesReducer";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    favoritesList: favoritesReducer
})

export default allReducers


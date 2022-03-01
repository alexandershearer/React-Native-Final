import { NEW_FAVORITE } from '../Actions/FavoriteAction'

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_FAVORITE:
            return [...state, action.payload.favorite]
        default: return state
    }
}


export default favoritesReducer
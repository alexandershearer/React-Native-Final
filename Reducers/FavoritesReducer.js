import { NEW_FAVORITE } from '../Actions'

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case NEW_FAVORITE:

            return [...state,]
    }
}


export default favoritesReducer
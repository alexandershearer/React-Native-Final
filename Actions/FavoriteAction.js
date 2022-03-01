export const NEW_FAVORITE = 'NEW_FAVORITE'
export const addFavorite = (favorite) => {
    return {
        type: 'NEW_FAVORITE',
        payload: { favorite },
    }
}
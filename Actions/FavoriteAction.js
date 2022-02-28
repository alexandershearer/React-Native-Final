export const NEW_FAVORITE = 'NEW_FAVORITE'
export const addFavorite = (favorite) => ({
    type: 'NEW_FAVORITE',
    payload: { favorite },
})
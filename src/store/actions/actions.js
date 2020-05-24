export const DELETE_IMAGE = 'DELETE_IMAGE';
export const SET_IMAGES = 'SET_IMAGES';
export const SAVE_IMAGES = 'SAVE_IMAGES'

export const FETCH_IMAGES = {
    START: 'corrusel/FETCH_IMAGES_START',
    COMPLETED: 'corrusel/FETCH_IMAGES_COMPLETED',
    FAILURE: 'corrusel/FETCH_IMAGES_FAILURE',
}

const API_URL = 'https://react-burger-51021.firebaseio.com/images.json'

export const delete_image = () => {
    return {
        type: DELETE_IMAGE
    };
}

// Thunk
export const fetchImages = () => {
    return dispatch => {
        dispatch({
            type: FETCH_IMAGES.START,
        })
        
        fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    dispatch({
                        type: FETCH_IMAGES.COMPLETED,
                        payload: data
                    })
                }, 1000 * 1.1)
            })
            .catch(error => {
                dispatch({
                    type: FETCH_IMAGES.FAILURE,
                    error: error
                })
            })
    }
}
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const SET_IMAGES = 'SET_IMAGES';
export const SAVE_IMAGES = 'SAVE_IMAGES'

export const delete_image = () => {
    return {
        type: DELETE_IMAGE
    };
}

export const save_images = (data) => {    
    console.log(data)
    return {
        type: SET_IMAGES,
        payload:data
    }
}

export const set_images = () => {

    return dispatch => {
        fetch('https://react-burger-51021.firebaseio.com/images.json', {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {            
            dispatch(save_images(data))
        });
    }

    
    /* return dispatch => {
        setTimeout(() => {
            dispatch(save_images())
        }, 3500)
    } */
}
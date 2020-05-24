import * as ActionTypes from '../actions/actions';
import {FETCH_IMAGES} from '../actions/actions'

const initialState = {
    images: {},
    activeslide: 0,
    length: 3,
    loading: false,
    error: null
};

const reducerCarrousel = (state = initialState, action) => {
    switch (action.type) {
        case  FETCH_IMAGES.START:
            return {
                ...state,
                loading: true,
            }
        case FETCH_IMAGES.COMPLETED:
            return {
                ...state,
                loading: false,
                images: action.payload
            }
        case FETCH_IMAGES.FAILURE:
            return {
                ...state,
                loading: false,
                images: {},
                error: action.error
            }
        case ActionTypes.DELETE_IMAGE: {
            const actionKey = action.imgKey;
            const items = Object.keys(state.images).reduce((obj, key) => {
                if (key !== actionKey) {
                    obj[key] = state.images[key]
                }
                return obj
            }, {})

            return {
                ...state,
                images: {
                    ...items
                },
                length: state.length - 1
            }
        }

        default:
            return state
    }
}

export default reducerCarrousel
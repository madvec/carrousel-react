import * as ActionTypes from '../actions/actions';

const initialState = {
    images: {},        
    activeslide: 0,
    length: 3,
    loading:true
};

const imagesConst = {
    image1: {
        name: 'Image Name 1',
        alt: 'Alt Name',
        src: 'https://cdn.pixabay.com/photo/2020/04/17/14/16/mountains-5055387_960_720.jpg',
        text: 'Lorem Ipsum 1',
        active: 'true'
    },
    image2: {
        name: 'Image Name 2',
        alt: 'Alt Name',
        src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        text: 'Lorem Ipsum 2',
        active: 'true'

    },
    image3: {
        name: 'Image Name 3',
        alt: 'Alt Name',
        src: 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg',
        text: 'Lorem Ipsum 3',
        active: 'true'
    }
};

const reducer = (state = initialState, action) => {    

    if(action.type === ActionTypes.SAVE_IMAGES) {
        console.log('save')
        console.log(action.payload)
        return {
            ...state,
            images: action.payload
        }
    }

    if (action.type === ActionTypes.SET_IMAGES) {        
        return {
            ...state,
            loading:false,            
        }
    }

    if (action.type === ActionTypes.DELETE_IMAGE) {

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

    else {
        return state
    }
};

export default reducer
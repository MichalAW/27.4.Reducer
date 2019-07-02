import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }, ...state]
        case REMOVE_COMMENT :
            return [    
                ...state.filter(comment=>action.id !== comment.id)
            ]
        case EDIT_COMMENT:
            const commentIndex = state.findIndex(comment=>comment.id === action.id)
            state[commentIndex] = Object.assign({},{
                id: action.id,
                text: action.text,
            })
            return [ 
                ...state
            ]
        case THUMB_UP_COMMENT:
            const commentIndex = state.findIndex(comment=>comment.id === action.id)
            state[commentIndex] = Object.assign({},{
                id: action.id,
                text: action.text,
            })
            return [ 
                ...state
            ]
        case THUMB_DOWN_COMMENT:
            const commentIndex = state.findIndex(comment => comment.id === action.id)
            state[commentIndex] = Object.assign({}, {
                id: action.id,
                text: action.text,
            })
            return [
                ...state
            ]
        default:
            return state;
    }
}
import { FAV_FRIEND } from './constants';

const initialState = {
    list: [
        { name: "friend A in the app" },
        { name: "friend B in the app" },
        { name: "friend C in the app" },
    ],
    favFriends: [ { name: "Za Anisa friend!" }],
    isLogged: false
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FAV_FRIEND:
            return {
                ...state,
                favFriends: [...state.favFriends, action.payload]
            };
        // case LOGGED_STATE_CHANGED:
        //     return {
        //         ...state,
        //         isLogged: action.payload     
        //     };
        default:
            return state;
    }
}

export default friendsReducer;
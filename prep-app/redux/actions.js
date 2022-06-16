import { FAV_FRIEND } from './constants';

export function addFriendToFav(friend) {
    return {
        type: FAV_FRIEND,
        payload: friend
    }
}
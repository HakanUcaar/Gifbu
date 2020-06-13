import {
    SELECTED_GIFIMAGE,
}
from './ReduxActionContants';

export function selectedGifImage(payload) {
    return { type: SELECTED_GIFIMAGE, payload };
};
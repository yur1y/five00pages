import {FETCH_IMAGES} from "./types";

export const fetchImages = page => async dispatch => {
    const five00pxUrl=`https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF`;

console.log(page)
    try {
        const res = await fetch(`${five00pxUrl}&page=${Number(page)}`);

        const json = await res.json();
        dispatch({type: FETCH_IMAGES, payload: json});


    } catch(err) {
        console.log(err);
    }

};
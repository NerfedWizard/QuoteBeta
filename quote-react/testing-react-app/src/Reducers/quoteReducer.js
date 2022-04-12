import { GET_QUOTES, GET_QUOTE } from "../Actions/types";

const initialState = {
    projects: [],
    project: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUOTES:
            return {
                ...state,
                projects: action.payload,
            };
        case GET_QUOTE:
            return {
                ...state,
                project: action.payload,
            };
        default:
            return state;
    }
}
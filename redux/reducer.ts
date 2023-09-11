export interface DataState {
    characters: Object[]
}
export interface Action {
    type: String
    payload: any
}

const initialstate: DataState = {
    characters: [],
}
const reducer = (state = initialstate, action: Action) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            return {
                ...state,
                characters: [...state.characters, action.payload]
            };

        default:
            return {
                ...state,

            }

    }

}



export default reducer
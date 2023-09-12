export interface DataState {
    characters: StarWarsCharacter[]
    filters: string[]
}
export interface Action {
    type: string
    payload: any
}
export interface Filters{
    gender:string[]
    eye_color:string[]
}

export interface StarWarsCharacter {
    birth_year?: string;
    eye_color?: string;
    films?: string[];
    gender?: string;
    hair_color?: string;
    height?: string;
    homeworld?: string;
    mass?: string;
    name?: string;
    skin_color?: string;
    created?: string;
    edited?: string;
    species?: string[];
    starships?: string[];
    url?: string;
    vehicles?: string[];
    index?: number
}


const initialstate: DataState = {
    characters: [],
    filters: []
}
const reducer = (state = initialstate, action: Action) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            return {
                ...state,
                characters: [...state.characters, action.payload]
            };
        case 'ADD_FILTER':
            if (state.filters.includes(action.payload)) {
                let deleteFilters = state.filters.filter(el => el !== action.payload)
                return {
                    ...state,
                    filters: deleteFilters
                };
            }else 
            return {
                ...state,
                filters: [...state.filters, action.payload]
            };

        default:
            return {
                ...state,

            }

    }

}



export default reducer
import { Filters } from "@/components/filters/Filters";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addImagesCharacter } from "./action";
import { DataImages } from "@/components/navBar/NavBar";

export interface DataState {
    characters: StarWarsCharacter[]
    filters: Filters
    imagesCharactes: Record<string, string>
}
export interface Action {
    type: string
    payload: any
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
    name: string;
    skin_color?: string;
    created?: string;
    edited?: string;
    species?: string[];
    starships?: string[];
    url?: string;
    vehicles?: string[];
    index?: number;
    image?: string
}


const initialstate: DataState = {
    characters: [],
    filters: {},
    imagesCharactes: {}
}
const reducer = (state = initialstate, action: Action) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            console.log(action.payload);
            return {
                ...state,
                characters: [action.payload, ...state.characters],
            };
        case 'ADD_FILTER':
            return {
                ...state,
                filters: action.payload
            };
        case 'ADD_IMAGES_CHARACTER':
            return {
                ...state,
                imagesCharactes: action.payload
            };
        default:
            return {
                ...state,

            }

    }

}




export default reducer
import { DataImages } from "@/components/navBar/NavBar"
import { StarWarsCharacter } from "./reducer"



export const addCharacterByname = (characters:StarWarsCharacter) => {
    return {
        type: "ADD_CHARACTER",
        payload: characters
    }
}

export const addFilter = (filter:object) => {
    return {
        type: "ADD_FILTER",
        payload: filter
    }
}

export const removeAllfilters = () => {
    return {
        type: 'REMOVE_ALL_FILTER',
    }
}
export const addImagesCharacter = (dataImages:Record<string, string>) => {    
    return {
        type: 'ADD_IMAGES_CHARACTER',
        payload: dataImages
    }
}
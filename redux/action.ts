
export interface Character {
    character: Object
}


export const addCharacterByname = (character: Character) => {
    return {
        type: "ADD_CHARACTER",
        payload: character
    }
}
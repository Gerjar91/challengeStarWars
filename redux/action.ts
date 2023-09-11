
export interface Character {
    characters: Object[]
}


export const addCharacterByname = (characters:Object[]) => {
    return {
        type: "ADD_CHARACTER",
        payload: characters
    }
}
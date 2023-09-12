import { DataState } from "./reducer";

export const dataCharacterFilters = (state: DataState) => {
    const { filters, characters } = state;
    console.log("filtros", filters);

    if (filters.length > 0) {
        const filteredData = characters.filter((character) =>
            filters.every((filter) =>
                character.gender === filter ||
                character.eye_color === filter ||
                character.birth_year?.includes(filter)
            )
        );

        console.log(filteredData);
        return filteredData;
    } else {
        return characters;
    }
};

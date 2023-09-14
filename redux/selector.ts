import { DataState, StarWarsCharacter } from "./reducer";

export const dataCharacterFilters = (state: DataState) => {
    const { filters, characters } = state;

    // Crear una copia de los filtros originales
    let filtersToApply: Record<string, any> = { ...filters };

    // Crear una copia de la lista original
    let charactersFilters = [...characters];

    if (filtersToApply.order === "A-Z") {
        charactersFilters = charactersFilters.sort((a, b) => {
            if (a.name < b.name) return -1;
            return 0;
        });
        delete filtersToApply.order;
    }
    if (filtersToApply.order === "Z-A") {
        charactersFilters = charactersFilters.sort((a, b) => {
            if (a.name > b.name) return -1;
            return 0;
        });
        delete filtersToApply.order;
    }

    // Iterar sobre los objetos para aplicar los filtros restantes
    charactersFilters = charactersFilters.filter((character: Record<string, any>) => {
        let matchesFilters = true;
        for (const key in filtersToApply) {
            if (character[key] !== filtersToApply[key]) {
                matchesFilters = false;
                break;
            }
        }
        return matchesFilters; // Cumple con todos los filtros
    });

    return charactersFilters;
};

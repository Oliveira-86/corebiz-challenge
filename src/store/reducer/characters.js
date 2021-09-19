import Characters from "../../models/characters";
import { SET_CHARACTES, TOGGLE_FAVORITE } from "../actions/characters";

const initialState = {
    availableCharacters: [],
    favoriteCharacter: []
};


const characterReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CHARACTES:
            return {
                ...state,
                availableCharacters: action.characters,
            };

        case TOGGLE_FAVORITE:
            
            const existingIndex = state.favoriteCharacter.findIndex(
                char => char.created === action.characterId
            );
            console.log("characterIdDDD xxxxxxxxxxxx --------- ", existingIndex)

            if (existingIndex >= 0) {
                const updatedFavChar = [...state.favoriteCharacter];
                updatedFavChar.splice(existingIndex, 1);
                return {...state, favoriteCharacter: updatedFavChar};
            }
            else {
                const character = state.availableCharacters.find(char => char.created === action.characterId)
                return {...state, favoriteCharacter: state.favoriteCharacter.concat(character)}
            }

        default:
            return state;
            
    }
};

export default characterReducer;
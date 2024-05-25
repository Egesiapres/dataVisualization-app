import { get } from "./api.jsx";

/**
 * get pokemon
 *
 * @param {string}
 * @param {string}
 * @param {string}
 * @returns {string}
 */

export const getPokemon = pokemonName => get(`/${pokemonName}`);

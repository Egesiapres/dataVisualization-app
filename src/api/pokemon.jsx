import { get } from "./api.jsx";

/**
 * get pokemon info
 *
 * @param {string} // pokemon name
 * @returns {object} // pokemon data
 */

export const getPokemon = pokemonName => get(`pokemon/${pokemonName}`);

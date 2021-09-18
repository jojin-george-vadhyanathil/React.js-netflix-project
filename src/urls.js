import { API_KEY } from "./Constants/Constants";

export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions =`discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy =`discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror =`discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance =`discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentary =`discover/movie?api_key=${API_KEY}&with_genres=99`;
export const trending =`trending/all/week?api_key=${API_KEY}&language=en-US`;
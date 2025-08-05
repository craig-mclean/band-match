import { getGenreById } from '../apis/genre'

export const FETCH_GENRE = 'FETCH_GENRE'
export const FETCH_GENRE_ERROR = 'FETCH_GENRE_ERROR'

export function fetchGenre(id) {
  return {
    type: FETCH_GENRE,
    payload: getGenreById(id),
  }
}

export function fetchGenreError(error) {
  return {
    type: FETCH_GENRE_ERROR,
    payload: error,
  }
} 

export const searchCharacterByNameUrl = (searchInput, offset) => {
  return `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchInput}&orderBy=name&offset=${offset}&apikey=380238e7b66ee649001c8f670be0101b`;
}

export const searchCharactersUrl = (offset) => {
  return `https://gateway.marvel.com/v1/public/characters?orderBy=name&offset=${offset}&apikey=380238e7b66ee649001c8f670be0101b`;
} 
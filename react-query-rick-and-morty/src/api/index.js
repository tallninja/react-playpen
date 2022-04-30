import axios from "axios";

export const getCharacters = async ({ queryKey }) => {
  const url = `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`;
  const res = await axios.get(url);
  return res.data;
};

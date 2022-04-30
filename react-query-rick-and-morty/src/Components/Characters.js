import { useState } from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../api";
import Character from "./Character";

function Characters() {
  const [page, setPage] = useState(40);
  const { data, status } = useQuery(["characters", page], getCharacters, {
    keepPreviousData: true,
  });

  if (status === "error") {
    return <p>Error</p>;
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const characters = data.results;

  return (
    <div className="characters">
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
      <div>
        <button
          className="button"
          disabled={data.info.prev === null}
          onClick={() => setPage((page) => page - 1)}
        >
          Previous
        </button>
        <button
          className="button"
          disabled={data.info.next === null}
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Characters;

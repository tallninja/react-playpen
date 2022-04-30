function Character({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="ststus">
          {character.status} - {character.species}
        </p>
        <p>Last seen on </p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
}

export default Character;

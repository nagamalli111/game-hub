import useGenres from "../Hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;

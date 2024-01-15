/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div
      style={{
        margin: "3rem",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        gap: "2rem",
      }}
    >
      {props.filteredMovies.map((movie) => (
        <MovieCard
          // burada key parametresini göndermemizin sebebi; key parametresi uniq bir değerdir, her component'ın parametresi diğer
          // component'dan farklı olmalıdır. Böylece react ile diziyi map edip component dönderdiğimiz component'in üzerinde herhangi silme
          // gibi işlem yaptığımız zaman react hangi component üzerinde işlem yapıldığını bu key prop'u sayesinde anlamaktadır.
          // bundan dolayı map ettiğimiz diziden bir component dönüyorsak uniq özelliğe sahip bir key vermemiz gerekmektedir.
          key={movie.original_title}
          titleText={movie.original_title}
          subtitleText={movie.vote_average}
          imageUrl={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
          movie={movie}
        />
      ))}
    </div>
  );
}

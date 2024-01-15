import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import MovieList from "./Components/Movie/MovieList";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getData = async () => {
    const baseURL =
      "https://api.themoviedb.org/3/discover/movie?api_key=aec564574552e0b3ddf0633c98f3a751";
    const response = await axios.get(baseURL);
    setMovies(response.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  let filteredMovies = movies.filter(
    (movie) =>
      movie.original_title.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
      -1
  );

  let searchEvent = (event) => {
    setSearchQuery(event.target.value);
  };
  // onChange event'i her çalıştığında yukarıdaki searchEvent fonksiyonu sayesinde buradaki render metotu
  // her seferinde tekrar çalıştırılacak ve böylece her harf girildiğinde filtered movies içerisindeki değerler
  // filtrelenecektir.

  //? -> Bize ait olmayan bir API'dan verileri çektiğim için remove işlemi yapamazdım. Karışıklık yaratmasın diye o işlemi yoruma aldım.
  // let removeMovie = async (gMovie) => {
  //   const baseURL = `http://192.168.1.101:3000/movies/${gMovie.id}`;
  //   await axios.delete(baseURL);
  //   let newMovies = this.state.movies.filter((movie) => movie !== gMovie);
  //   this.setState({ movies: newMovies });
  // };
  return (
    <div>
      <NavBar searchEvent={searchEvent} />
      <MovieList filteredMovies={filteredMovies} />
      <footer style={{ height: "2rem" }}></footer>
    </div>
  );
}

export default App;

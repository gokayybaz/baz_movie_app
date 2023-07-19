import { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import MovieList from "./Components/Movie/MovieList";
import axios from "axios";

class App extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  //? -> Component mount olduktan sonra : verileri çekeceğim url'i belirledim.
  //? -> axios kütüphanesini kullanarak verileri çekeceğim adrese get isteği yaptım.
  //? -> verilerin gelmesi biraz süreceğinden dolayı await ile bu işlemin gecikebileceğini ve beklemesi gerektiğini belirttim. (tabi bu işlem için fonksiyonu async olarak tanımlamak gerekmektedir.)
  //? -> veriler geldikten sonra gelen verileri state'te bulunan boş diziye aktardım.
  async componentDidMount() {
    const baseURL =
      "https://api.themoviedb.org/3/discover/movie?api_key=aec564574552e0b3ddf0633c98f3a751";
    const response = await axios.get(baseURL);
    this.setState({ movies: response.data.results });
  }

  searchEvent = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    // onChange event'i her çalıştığında yukarıdaki searchEvent fonksiyonu sayesinde buradaki render metotu
    // her seferinde tekrar çalıştırılacak ve böylece her harf girildiğinde filtered movies içerisindeki değerler
    // filtrelenecektir.
    let filteredMovies = this.state.movies.filter(
      (movie) =>
        movie.original_title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
    );
    //? -> Bize ait olmayan bir API'dan verileri çektiğim için remove işlemi yapamazdım. Karışıklık yaratmasın diye o işlemi yoruma aldım.
    // let removeMovie = async (gMovie) => {
    //   const baseURL = `http://192.168.1.101:3000/movies/${gMovie.id}`;
    //   await axios.delete(baseURL);
    //   let newMovies = this.state.movies.filter((movie) => movie !== gMovie);
    //   this.setState({ movies: newMovies });
    // };
    return (
      <div>
        <NavBar searchEvent={this.searchEvent} />
        <MovieList filteredMovies={filteredMovies} />
        <footer style={{ height: "2rem" }}></footer>
      </div>
    );
  }
}
export default App;

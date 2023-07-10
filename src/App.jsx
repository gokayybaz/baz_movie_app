import { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import MovieCard from "./Components/Movie/MovieCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 1,
          name: "kurtlar vadisi ırak",
          type: "Aksiyon/Macera",
          imageUrl:
            "https://www.moviemeter.nl/images/cover/34000/34904.jpg?cb=1491295522",
        },
        {
          id: 2,
          name: "recep ivedik 6",
          type: "Komedi",
          imageUrl:
            "https://www.themoviedb.org/t/p/original/2wsp4xmlN9rmepq3KQpQoC8GSZt.jpg",
        },
        {
          id: 3,
          name: "şevkat yerimdar 1",
          type: "Komedi",
          imageUrl:
            "https://i0.wp.com/turkischefilme.de/wp-content/uploads/2017/03/sevkat-yerimdar.jpg?w=800&ssl=1",
        },
        {
          id: 3,
          name: "şevkat yerimdar 2",
          type: "Komedi",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/1uPcOXlstov7pmRyokdlk2hix5DnTEEhs6A-pm4j3zuDCDtL8A0QUBAL4Nlq_-2Dekg2zW9ExX7GuKqWugZv4NR_rgTOaRMBrjKtc5IIdM0wSjE=w1200-h630-p-k-no-nu",
        },
      ],
    };

    // this.filterMovies = this.filterMovies.bind(this.filterMovies);
  }
  filterMovies = (value) => {
    let movieList = [
      {
        id: 1,
        name: "kurtlar vadisi ırak",
        type: "Aksiyon/Macera",
        imageUrl:
          "https://www.moviemeter.nl/images/cover/34000/34904.jpg?cb=1491295522",
      },
      {
        id: 2,
        name: "recep ivedik 6",
        type: "Komedi",
        imageUrl:
          "https://www.themoviedb.org/t/p/original/2wsp4xmlN9rmepq3KQpQoC8GSZt.jpg",
      },
      {
        id: 3,
        name: "şevkat yerimdar 1",
        type: "Komedi",
        imageUrl:
          "https://i0.wp.com/turkischefilme.de/wp-content/uploads/2017/03/sevkat-yerimdar.jpg?w=800&ssl=1",
      },
      {
        id: 3,
        name: "şevkat yerimdar 2",
        type: "Komedi",
        imageUrl:
          "https://lh3.googleusercontent.com/proxy/1uPcOXlstov7pmRyokdlk2hix5DnTEEhs6A-pm4j3zuDCDtL8A0QUBAL4Nlq_-2Dekg2zW9ExX7GuKqWugZv4NR_rgTOaRMBrjKtc5IIdM0wSjE=w1200-h630-p-k-no-nu",
      },
    ];
    // console.log(typeof value + "-" + value);
    value == ""
      ? this.setState({ movies: movieList })
      : this.setState({
          movies: this.state.movies.filter((movie) =>
            movie.name.includes(value)
          ),
        });
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <NavBar filterMovies={this.filterMovies} />
        <div
          style={{
            margin: "3rem",
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "2rem",
          }}
        >
          {this.state.movies.map((movie, index) => (
            <MovieCard
              titleText={movie.name}
              subtitleText={movie.type}
              imageUrl={movie.imageUrl}
              key={movie.name}
              removeMovie={() => {
                this.setState(this.state.movies.splice(index, 1));
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;

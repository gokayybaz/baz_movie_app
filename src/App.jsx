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
          name: "Kurtlar Vadisi Irak",
          type: "Aksiyon/Macera",
          imageUrl:
            "https://www.moviemeter.nl/images/cover/34000/34904.jpg?cb=1491295522",
        },
        {
          id: 2,
          name: "Recep İvedik 6",
          type: "Komedi",
          imageUrl:
            "https://www.themoviedb.org/t/p/original/2wsp4xmlN9rmepq3KQpQoC8GSZt.jpg",
        },
        {
          id: 3,
          name: "Şevkat Yerimdar 1",
          type: "Komedi",
          imageUrl:
            "https://i0.wp.com/turkischefilme.de/wp-content/uploads/2017/03/sevkat-yerimdar.jpg?w=800&ssl=1",
        },
        {
          id: 3,
          name: "Şevkat Yerimdar 2",
          type: "Komedi",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/1uPcOXlstov7pmRyokdlk2hix5DnTEEhs6A-pm4j3zuDCDtL8A0QUBAL4Nlq_-2Dekg2zW9ExX7GuKqWugZv4NR_rgTOaRMBrjKtc5IIdM0wSjE=w1200-h630-p-k-no-nu",
        },
        {
          id: 4,
          name: "Hızlı ve Öfkeli: Hobbs ve Shaw",
          type: "Aksiyon/Macera",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/tr/0/01/Hizlive%C3%96fkeli_HobbsveShaw.jpg",
        },
        {
          id: 5,
          name: "Hızlı ve Öfkeli 8",
          type: "Aksiyon/Macera",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/tr/a/a2/H%C4%B1zl%C4%B1_ve_%C3%96fkeli_8_Afi%C5%9F.jpg",
        },
      ],
    };

    // this.filterMovies = this.filterMovies.bind(this.filterMovies);
  }
  filterMovies = (value) => {
    let movieList = [
      {
        id: 1,
        name: "Kurtlar Vadisi Irak",
        type: "Aksiyon/Macera",
        imageUrl:
          "https://www.moviemeter.nl/images/cover/34000/34904.jpg?cb=1491295522",
      },
      {
        id: 2,
        name: "Recep Ivedik 6",
        type: "Komedi",
        imageUrl:
          "https://www.themoviedb.org/t/p/original/2wsp4xmlN9rmepq3KQpQoC8GSZt.jpg",
      },
      {
        id: 3,
        name: "Şevkat Yerimdar 1",
        type: "Komedi",
        imageUrl:
          "https://i0.wp.com/turkischefilme.de/wp-content/uploads/2017/03/sevkat-yerimdar.jpg?w=800&ssl=1",
      },
      {
        id: 3,
        name: "Şevkat Yerimdar 2",
        type: "Komedi",
        imageUrl:
          "https://lh3.googleusercontent.com/proxy/1uPcOXlstov7pmRyokdlk2hix5DnTEEhs6A-pm4j3zuDCDtL8A0QUBAL4Nlq_-2Dekg2zW9ExX7GuKqWugZv4NR_rgTOaRMBrjKtc5IIdM0wSjE=w1200-h630-p-k-no-nu",
      },
      {
        id: 4,
        name: "Hızlı ve Öfkeli: Hobbs ve Shaw",
        type: "Aksiyon/Macera",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/tr/0/01/Hizlive%C3%96fkeli_HobbsveShaw.jpg",
      },
      {
        id: 5,
        name: "Hızlı ve Öfkeli 8",
        type: "Aksiyon/Macera",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/tr/a/a2/H%C4%B1zl%C4%B1_ve_%C3%96fkeli_8_Afi%C5%9F.jpg",
      },
    ];
    // console.log(typeof value + "-" + value);
    value == ""
      ? this.setState({ movies: movieList })
      : this.setState({
          movies: this.state.movies.filter((movie) =>
            movie.name.toLowerCase().includes(value)
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
              // burada key parametresini göndermemizin sebebi; key parametresi uniq bir değerdir, her component'ın parametresi diğer
              // component'dan farklı olmalıdır. Böylece react ile diziyi map edip component dönderdiğimiz component'in üzerinde herhangi silme
              // gibi işlem yaptığımız zaman react hangi component üzerinde işlem yapıldığını bu key prop'u sayesinde anlamaktadır.
              // bundan dolayı map ettiğimiz diziden bir component dönüyorsak uniq özelliğe sahip bir key vermemiz gerekmektedir.
              key={movie.name}
              titleText={movie.name}
              subtitleText={movie.type}
              imageUrl={movie.imageUrl}
              removeMovie={() => {
                this.setState(this.state.movies.splice(index, 1));
              }}
            />
          ))}
        </div>
        <footer style={{ height: "2rem" }}></footer>
      </div>
    );
  }
}
export default App;

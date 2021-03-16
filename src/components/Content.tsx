import { MovieCard } from './MovieCard'

import '../styles/content.scss'

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: {
  movies: Array<MovieProps>,
  selectedGenreTitle: string,
}) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard
              key={movie.Title}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
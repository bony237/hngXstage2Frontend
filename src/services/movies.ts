export type movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // > 0
  id: number; // > 0
  original_language: string;
  overview: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number; // > 0
  runtime?: number; // > 0
  genres?: { id: number; name: string }[];
};

export type dataTopMovieTMDB_type = {
  page: number; // > 0
  results: movie[];
  total_pages: number; // > 0
  total_results: number; // > 0
};

export const fetchTopMovies = async (): Promise<dataTopMovieTMDB_type> => {
  const TMDBTOKEN = process.env.NEXT_PUBLIC_TMDBTOKEN;
  const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", { headers: { Authorization: `Bearer ${TMDBTOKEN}` } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetchMovieDetails = async (id:string): Promise<movie> => {
  const TMDBTOKEN = process.env.NEXT_PUBLIC_TMDBTOKEN;
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, { headers: { Authorization: `Bearer ${TMDBTOKEN}` } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

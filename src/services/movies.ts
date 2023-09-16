export type movies = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[]; // > 0
  id: number; // > 0
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number; // > 0
};

export type dataTopMovieTMDB_type = {
  page: number; // > 0
  results: movies[];
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

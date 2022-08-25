import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const TMDB_MOVIE_URL = 'https://api.themoviedb.org/3/movie';
const TMDB_TV_URL = 'https://api.themoviedb.org/3/tv';

interface IProps {
  category: 'movie' | 'tv';
  type: string;
}

interface IData {
  results: never[];
}

const cagetories = {
  movie: TMDB_MOVIE_URL,
  tv: TMDB_TV_URL,
};

export default function useMovies(props: IProps) {
  const { type, category } = props;

  const url = `${cagetories[category]}/${type}`;

  const { data } = useSWR<IData>(url, fetcher, { revalidateOnFocus: false });

  return { data: data?.results.slice(0, 8) };
}

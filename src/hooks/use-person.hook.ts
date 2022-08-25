import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const TMDB_MOVIE_URL = 'https://api.themoviedb.org/3/person';

interface IProps {
  id: number;
  category?: string;
}

export default function usePerson(props: IProps) {
  const { id, category } = props;

  const url = `${TMDB_MOVIE_URL}/${id}${category ? `/${category}` : ''}`;

  const { data } = useSWR<any>(id ? url : null, fetcher, { revalidateOnFocus: false });

  return { data };
}

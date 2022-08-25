import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const TMDB_TV_URL = 'https://api.themoviedb.org/3/tv';

interface IProps {
  id: string | string[] | undefined;
  category?: string;
}

export default function useTVInfo(props: IProps) {
  const { id, category } = props;

  const url = `${TMDB_TV_URL}/${id}${category ? `/${category}` : ''}`;

  const { data } = useSWR<any>(id ? url : null, fetcher, { revalidateOnFocus: false });

  return { data };
}

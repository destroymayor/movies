import Head from 'next/head';

import useMovies from '@/hooks/use-movies.hook';

import List from '@/components/List';

export default function Home() {
  const { data: popularMoviesData } = useMovies({ category: 'movie', type: 'popular' });
  const { data: popularTVData } = useMovies({ category: 'tv', type: 'popular' });
  const { data: nowPlayingMoviesData } = useMovies({ category: 'movie', type: 'now_playing' });
  const { data: upcomingData } = useMovies({ category: 'movie', type: 'upcoming?region=US' });

  return (
    <>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto flex w-full max-w-4xl flex-col px-4">
        <List title="Popular Movies" category="movies" data={popularMoviesData} />
        <List title="Popular TV Shows" category="tv" data={popularTVData} />
        <List title="Now Playing" category="movies" data={nowPlayingMoviesData} />
        <List title="Coming Soon" category="movies" data={upcomingData} />
      </div>
    </>
  );
}

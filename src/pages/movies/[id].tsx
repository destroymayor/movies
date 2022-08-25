import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import useMovieInfo from '@/hooks/use-movie-info.hook';

import MovieHero from '@/components/MovieHero';
import MovieDetail from '@/components/MovieDetail';
import SocialMedia from '@/components/SocialMedia';

const TopCast = dynamic(() => import('@/components/TopCast'), { ssr: false });
const Media = dynamic(() => import('@/components/Media'), { ssr: false });
const Videos = dynamic(() => import('@/components/Videos'), { ssr: false });
const Keywords = dynamic(() => import('@/components/Keywords'), { ssr: false });
const Reviews = dynamic(() => import('@/components/Reviews'), { ssr: false });
const Recommendations = dynamic(() => import('@/components/Recommendations'), { ssr: false });

export default function Movie() {
  const router = useRouter();
  const id: number | any = router.query.id;

  const { data: movieData } = useMovieInfo({ id });
  const { data: topCastData } = useMovieInfo({ id, category: 'credits?language=en' });
  const { data: mediaData } = useMovieInfo({ id, category: 'images?language=en' });
  const { data: videoData } = useMovieInfo({ id, category: 'videos?language=en' });
  const { data: reviewData } = useMovieInfo({ id, category: 'reviews' });
  const { data: recommendData } = useMovieInfo({ id, category: 'recommendations' });
  const { data: externalIdData } = useMovieInfo({ id, category: 'external_ids' });
  const { data: keywordData } = useMovieInfo({ id, category: 'keywords' });

  if (!movieData) return null;

  return (
    <>
      <Head>
        <title>{movieData?.title}</title>
      </Head>
      <MovieHero data={movieData} />

      <div className="py-10 px-8 lg:px-20">
        <div className="flex flex-col-reverse gap-10 lg:flex-row">
          <div className="flex w-[85vw] flex-col gap-10 md:flex-1 lg:w-[calc(100vw-450px)]">
            <TopCast data={topCastData} />
            <Media data={mediaData} />
            <Videos data={videoData} />
            <Reviews data={reviewData} />
            <Recommendations data={recommendData} />
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <SocialMedia data={externalIdData} />
            <MovieDetail data={movieData} />
            <Keywords data={keywordData} />
          </div>
        </div>
      </div>
    </>
  );
}

import Link from 'next/link';
import Image from 'next/future/image';

interface IRecommendations {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  popularity: number;
}

interface IProps {
  data: {
    results: IRecommendations[];
  };
}

export default function Recommendations(props: IProps) {
  const { data } = props;

  const recommendations = data?.results;
  const sortDataByPopularity = recommendations?.sort(
    (after, before) => before.popularity - after.popularity
  );

  if (!sortDataByPopularity) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="border-l-4 border-amber-600 pl-2 text-2xl">Recommendation</span>

      <div className="relative overflow-x-auto rounded-md">
        <ul className="flex gap-4">
          {sortDataByPopularity.map((recommend) => (
            <li key={recommend.id}>
              <Link href={`/movies/${recommend.id}`} passHref>
                <a className="relative my-4 flex flex-col items-start gap-2">
                  <span className="absolute top-0 left-1/2 z-10 flex rounded-full bg-amber-500 px-4 py-1 [transform:translate(-50%,-50%)]">
                    {parseFloat(recommend.vote_average.toFixed(1))}
                  </span>

                  <Image
                    loading="lazy"
                    className="min-w-[176px] rounded-md"
                    src={`https://image.tmdb.org/t/p/w342${recommend.poster_path}`}
                    alt={recommend.title}
                    width={176}
                    height={264}
                  />

                  <div className="flex flex-col">
                    <p>{recommend.title}</p>
                    <span className="text-sm text-zinc-500">{recommend.release_date}</span>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

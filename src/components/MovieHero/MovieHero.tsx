import Image from 'next/future/image';
import covertMinsToHrsMins from '@/utils/covert-mins-to-hrs-mins';

interface IGenres {
  name: string;
}

interface IProps {
  data: {
    backdrop_path: string;
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    runtime: number;
    genres: IGenres[];
    tagline: string;
    overview: string;
  };
}

export default function MovieHero(props: IProps) {
  const { data } = props;

  const backdrop = `https://www.themoviedb.org/t/p/original/${data.backdrop_path}`;
  const title = data.title;
  const releaseDate = data.release_date;
  const runtime = covertMinsToHrsMins(data.runtime);
  const genres = data?.genres;
  const tagline = data.tagline;
  const overview = data.overview;
  const calculateScore = `${parseFloat(data.vote_average.toFixed(1)) * 10}%`;

  return (
    <div
      className="relative flex justify-center"
      style={{
        backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.7), rgba(0,0,0,0.9), rgba(0,0,0,0.7))',
      }}
    >
      <div
        className="absolute inset-0 -z-[1] min-h-[800px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backdrop})` }}
      />

      <div className="flex min-h-[800px] max-w-4xl flex-col items-center gap-10 py-10 lg:flex-row">
        <div className="min-w-[300px]">
          <Image
            alt={data.title}
            className="rounded-md"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`}
            width={300}
            height={450}
          />
        </div>

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-5xl">{title}</h1>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 fill-amber-500 text-amber-500"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {calculateScore}
            </span>
            <span>|</span>
            <span>{releaseDate}</span>
            <span>|</span>
            <span>{runtime}</span>
          </div>

          <span className="italic text-zinc-200">{tagline}</span>

          <ul className="flex items-center divide-x">
            {genres?.map((genre) => (
              <li className="px-4" key={genre.name}>
                {genre.name}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 px-10 text-center lg:px-0 lg:text-left">
            <span className="text-xl">Overview</span>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

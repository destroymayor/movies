import Link from 'next/link';
import Image from 'next/future/image';

interface IProfiles {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
}

interface IProps {
  data: IProfiles[];
}

export default function KnownFor(props: IProps) {
  const { data } = props;

  const sortDataByPopularity = data?.sort((after, before) => before.popularity - after.popularity);

  if (!sortDataByPopularity) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="border-l-4 border-amber-600 pl-2 text-2xl">Known For</span>

      <div className="overflow-x-auto">
        <ul className="flex gap-2">
          {sortDataByPopularity?.map((cast) => (
            <li key={cast.id}>
              <Link href={`/movies/${cast.id}`} passHref>
                <a className="flex flex-col gap-2">
                  <Image
                    className="min-w-[185px] rounded-md"
                    src={`https://www.themoviedb.org/t/p/w500/${cast.poster_path}`}
                    alt={cast.title}
                    width={150}
                    height={225}
                  />
                  <span>{cast.title}</span>
                  <span className="text-sm text-zinc-400">{cast.release_date}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

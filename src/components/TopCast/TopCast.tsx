import Link from 'next/link';
import Image from 'next/future/image';

interface ICast {
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  known_for_department: string;
  character: string;
}

interface IProps {
  data: {
    cast: ICast[];
  };
}

export default function TopCast(props: IProps) {
  const { data } = props;

  const casts = data?.cast?.slice(0, 10);

  if (!casts) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="border-l-4 border-amber-600 pl-2 text-2xl">Top Cast</span>

      <div className="relative overflow-x-auto rounded-md">
        <ul className="flex gap-4">
          {casts.map((cast) => (
            <li key={cast.id}>
              <Link href={`/person/${cast.id}`}>
                <a className="flex flex-col gap-2">
                  <div className="h-auto min-w-[160px]">
                    <Image
                      loading="lazy"
                      className="rounded-md"
                      src={`https://image.tmdb.org/t/p/h632${cast.profile_path}`}
                      alt={cast.name}
                      width={160}
                      height={217.5}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>{cast.name}</p>
                    <p className="text-sm text-zinc-400">as {cast.character}</p>
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

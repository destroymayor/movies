import Link from 'next/link';
import Image from 'next/future/image';

interface IDataProps {
  id: string;
  title: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
}

interface IListProps {
  title: string;
  category: 'movies' | 'tv';
  data: IDataProps[] | undefined;
}

export default function List(props: IListProps) {
  const { data, category, title } = props;

  return (
    <div className="flex flex-col gap-4 py-6">
      <h2 className="border-l-4 border-amber-600 pl-2 text-3xl">{title}</h2>
      {!data ? (
        <div>loading...</div>
      ) : (
        <ul className="flex flex-wrap gap-4">
          {data.map((item) => (
            <li key={item.id} className="max-w-[200px] cursor-pointer">
              <Link href={`${category}/${item.id}`} passHref>
                <a>
                  <Image
                    className="h-[300px] flex-1 rounded-md"
                    src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                    width={200}
                    height={300}
                    alt={item.title}
                  />

                  <div className="flex h-20 flex-col gap-2 pt-2">
                    <span>{item.title}</span>
                    <div className="flex items-center gap-2 divide-x divide-zinc-400 text-zinc-400">
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
                        {item.vote_average}
                      </span>
                      <span className="pl-2">{item.release_date}</span>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

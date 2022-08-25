import Image from 'next/future/image';

interface IProfiles {
  file_path: string;
}

interface IProps {
  data: IProfiles[];
}

export default function Profiles(props: IProps) {
  const { data } = props;

  if (!data) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="border-l-4 border-amber-600 pl-2 text-2xl">Photos</span>

      <div className="overflow-x-auto">
        <ul className="flex items-center gap-2">
          {data?.map((profile) => (
            <li key={profile.file_path}>
              <Image
                className="min-w-[185px] rounded-md"
                alt={''}
                src={`https://image.tmdb.org/t/p/w185/${profile.file_path}`}
                width={185}
                height={278}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

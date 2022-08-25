import { useState } from 'react';
import Image from 'next/future/image';

import clsx from 'clsx';

interface IImages {
  file_path: string;
  vote_average: number;
  width: number;
  height: number;
}

interface IProps {
  data: {
    posters: IImages[];
    backdrops: IImages[];
    logos: IImages[];
  };
}

interface IMediaType {
  backdrops: IImages[];
  posters: IImages[];
  logos: IImages[];
  [key: string]: IImages[];
}

export default function Images(props: IProps) {
  const { data } = props;

  const [activeTab, setActiveTab] = useState('backdrops');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const getPosters = data?.posters;
  const getBackdrops = data?.backdrops;
  const getLogos = data?.logos;

  const mediaTypes: IMediaType = {
    backdrops: getBackdrops,
    posters: getPosters,
    logos: getLogos,
  };

  const getTabs: string[] = Object.keys(mediaTypes);
  const getImages = mediaTypes?.[activeTab];

  if (!data) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-10">
        <span className="border-l-4 border-amber-600 pl-2 text-2xl">Media</span>

        <div className="flex items-center gap-4">
          {getTabs.map((tab) => (
            <button
              className={clsx('pb-1', tab === activeTab ? 'border-b-2 border-amber-600' : '')}
              onClick={() => handleTabChange(tab)}
              key={tab}
            >{`${tab.slice(0, 1).toLocaleUpperCase()}${tab.slice(1)}`}</button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto rounded-md">
        {getImages?.map((item) => (
          <div key={item.file_path} className="h-[300px] min-w-[533px]">
            <Image
              className="rounded-md"
              loading="lazy"
              alt=""
              src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${item.file_path}`}
              width={533}
              height={300}
              style={{ height: 'auto', width: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

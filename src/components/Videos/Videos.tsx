interface IVideosData {
  name: string;
  key: string;
  type: string;
}

interface IProps {
  data: {
    results: IVideosData[];
  };
}

export default function Videos(props: IProps) {
  const { data } = props;

  const videos = data?.results;

  const filterTrailerData = videos?.filter((video) => video.type === 'Trailer');

  if (!videos) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="border-l-4 border-amber-600 pl-2 text-2xl">Trailer</span>

      <div className="relative flex items-center gap-2 overflow-x-auto rounded-md">
        {filterTrailerData.map((video) => (
          <iframe
            key={video.key}
            title={video.name}
            frameBorder="0"
            className="min-h-[420px] min-w-[530px] rounded-md"
            src={`https://www.youtube.com/embed/${video.key}`}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ))}
      </div>
    </div>
  );
}

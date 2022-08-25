interface IKeywords {
  id: number;
  name: string;
}

interface IProps {
  data: {
    keywords: IKeywords[];
  };
}

export default function Keywords(props: IProps) {
  const { data } = props;

  const keywords = data?.keywords;

  if (!keywords) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold">Keywords</span>

      <div className="flex flex-wrap items-center gap-2">
        {keywords.map((keyword) => (
          <span key={keyword.id} className="rounded-md bg-zinc-600 px-2 py-1">
            {keyword.name}
          </span>
        ))}
      </div>
    </div>
  );
}

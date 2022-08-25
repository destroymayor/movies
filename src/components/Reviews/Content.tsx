import { useState } from 'react';

interface IProps {
  data: string;
}

const contentMaxLimit = 100;

export default function Content(props: IProps) {
  const { data } = props;

  const [isExpanded, setExpand] = useState<boolean>(false);

  const handleExpanded = () => {
    setExpand((prev) => !prev);
  };

  const contentLength = data?.length;
  const getContent = data?.slice(0, contentMaxLimit);
  const getMoreContent = data?.slice(contentMaxLimit, contentLength);

  return (
    <div>
      <p>
        {getContent}
        <span className="px-1">
          {contentLength >= contentMaxLimit && !isExpanded && '...'}
          {isExpanded && <span>{getMoreContent}</span>}
        </span>
      </p>

      {contentLength > contentMaxLimit && (
        <div>
          <button className="py-2 text-zinc-500 hover:underline" onClick={handleExpanded}>
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        </div>
      )}
    </div>
  );
}

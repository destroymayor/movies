import formatDate from '@/utils/format-date';

import Content from './Content';

interface IReviews {
  author: string;
  content: string;
  id: string;
  created_at: string;
  updated_at: string;
}

interface IProps {
  data: {
    results: IReviews[];
  };
}

export default function Reviews(props: IProps) {
  const { data } = props;

  const reviews = data?.results;

  if (!reviews) return null;

  return (
    <div className="flex flex-col gap-4">
      <span className="border-l-4 border-amber-600 pl-2 text-2xl">Reviews</span>

      {reviews.length === 0 && <div>No any reviews</div>}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-md bg-zinc-800 p-4">
            <div className="flex items-center gap-2 pb-2">
              <span className="text-lg">{review.author}</span>
              <span className="text-zinc-400">{formatDate(new Date(review.updated_at))}</span>
            </div>

            <Content data={review.content} />
          </div>
        ))}
      </div>
    </div>
  );
}

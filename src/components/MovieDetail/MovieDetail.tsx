interface IProps {
  data: {
    original_title: string;
    status: string;
    budget: number;
    revenue: number;
  };
}

export default function MovieDetail(props: IProps) {
  const { data } = props;

  const formatMoney = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="font-bold">Original Title</span>
        <span>{data?.original_title}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Status</span>
        <span>{data?.status}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Budget</span>
        <span>{formatMoney.format(data?.budget)}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Revenue</span>
        <span>{formatMoney.format(data?.revenue)}</span>
      </div>
    </div>
  );
}

import dayjs from 'dayjs';

import { ExperienceItem } from '../app/props';
import Badge from './Badge';

interface WorkItemProps extends ExperienceItem {}

const getTimeToX = (time1: string, time2?: string) => {
  if (!time2) return dayjs(time1).subtract(1, 'month').toNow(true);
  return dayjs(time1).to(dayjs(time2).add(1, 'month'), true);
};

const WorkItem = (props: WorkItemProps) => {
  const { time, company, title, location, content, startDate, endData } = props;

  return (
    <div key={company} className="text-sm py-4">
      <div className="company text-xl font-bold mb-2">{company}</div>

      <div className="flex flex-col lg:flex-row justify-between">
        <p className="font-bold text-base  mb-2">{title}</p>
        <p className=" text-slate-400 mb-2">{time}</p>
      </div>
      <p className="mb-2">{location}</p>
      <div className="mb-2">
        <p>{content.intro} </p>
        {content.list?.length ? content.list.map((i, idx) => <li key={idx}> {i} </li>) : null}
      </div>
      {content.stack?.length ? (
        <div className="flex flex-wrap gap-1">
          {content.stack.map((item, idx) => (
            <Badge key={idx} color="gray">
              {item}
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default WorkItem;
import { ExperienceItem } from '../app/props';
import Badge from './Badge';

interface WorkItemProps extends ExperienceItem {}

const WorkItem = (props: WorkItemProps) => {
  const { time, company, title, location, content } = props;

  return (
    <div key={company} className="text-sm py-4">
      <div className="company text-xl font-bold mb-2">{company}</div>

      <div className="flex justify-between">
        <p className="font-bold text-base  mb-2">{title}</p>
        <p className=" text-slate-400 mb-2">{time}</p>
      </div>
      <p className="mb-2">{location}</p>
      <div className="mb-2">
        <p>{content.intro} </p>
        {content.list?.length ? content.list.map((i, idx) => <li key={idx}> {i} </li>) : null}
      </div>
      {content.stack?.length ? (
        <div className="flex gap-1">
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

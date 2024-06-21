import Image from 'next/image';
import Badge from './Badge';
import { ProjectItem } from '@/app/props';

interface ProjectCardProps extends ProjectItem {}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, stack, url, image } = props;

  return (
    <a target="_blank" href={url}>
      <div className="card bg-white border-slate-100 dark:bg-slate-800 overflow-hidden dark:border-slate-500 transition duration-300 hover:shadow-lg dark:hover:shadow-white/10 rounded-xl mb-6 flex gap-4">
        <div className="left w-4/12 relative ">
          <Image style={{ objectFit: 'cover' }} src={image} alt="project" fill />
        </div>
        <div className="right w-8/12 p-4 ">
          <p className="font-bold text-lg dark:text-white">{title}</p>
          <p className="py-2">{description}</p>
          <div>
            {stack?.length ? (
              <div className="flex flex-wrap gap-2 ">
                {stack.map((item, idx) => (
                  <Badge key={idx} color="gray">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

import Image from 'next/image';
import Badge from './Badge';
import { ProjectItem } from '@/app/props';

interface ProjectCardProps extends ProjectItem {}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, stack, url, image } = props;

  return (
    <a target="_blank" rel="noreferrer" href={url} className="group block">
      <article className="card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/80 dark:hover:border-slate-500">
        <div className="relative aspect-[16/9] border-b border-slate-200 dark:border-slate-700">
          <Image
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <p className="text-lg font-bold dark:text-white">{title}</p>
            <span className="text-sm text-slate-400 transition group-hover:text-slate-700 dark:group-hover:text-slate-200">
              Visit
            </span>
          </div>
          <p className="py-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
          {stack.length ? (
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge key={item} color="gray">
                  {item}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;

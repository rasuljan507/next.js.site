import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity.image';

interface ProjectCardProps {
  project: {
    _id: string;
    title: string;
    mainImage: any;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/portfolio/${project._id}`}>
      <div className="rounded-lg overflow-hidden group border border-gray-800 hover:border-[#F95738] transition-colors duration-300 cursor-pointer">

        <div className="relative w-full h-56 bg-gray-900">
          <Image
            src={urlFor(project.mainImage).url()}
            alt={`Скриншот проекта ${project.title}`}
            fill
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 bg-[#1F1F23]">
          <h3 className="text-lg font-semibold text-white truncate">
            {/* Получаем заголовок из объекта project */}
            {project.title}
          </h3>
        </div>

      </div>
    </Link>
  );
};

export default ProjectCard;
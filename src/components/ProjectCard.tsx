import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  linkUrl: string;
};

const ProjectCard = ({ title, imageUrl, linkUrl }: ProjectCardProps) => {
  return (
    
    <Link href={linkUrl} legacyBehavior={false}>
      <div className="rounded-lg overflow-hidden group border border-gray-800 hover:border-[#F95738] transition-colors duration-300 cursor-pointer">

        {/* Контейнер для картинки */}
        <div className="relative w-full h-56 bg-gray-900">
          <Image
            src={imageUrl}
            alt={`Скриншот проекта ${title}`}
            fill 
            style={{ objectFit: 'cover' }} 
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Контейнер для текста */}
        <div className="p-4 bg-[#1F1F23]">
          <h3 className="text-lg font-semibold text-white truncate">
            {title}
          </h3>
        </div>

      </div>
    </Link>
  );
};

export default ProjectCard;
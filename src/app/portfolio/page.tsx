import ProjectCard from "@/components/ProjectCard";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";

interface Project {
  _id: string;
  title: string;
  mainImage: any; 
}

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    mainImage 
  }`;
  const projects = await client.fetch<Project[]>(query);
  return projects;
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-16 md:py-24">

      {/* ВОТ ЭТОТ БЛОК МЫ ВОЗВРАЩАЕМ */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Превращаю ваши идеи в реальность
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Full-Stack разработчик | Python & C#
        </p>
      </div>

      {/* А ЗДЕСЬ КРАСИВАЯ СЕТКА ДЛЯ КАРТОЧЕК */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            imageUrl={project.mainImage ? urlFor(project.mainImage).width(500).url() : '/placeholder.png'}
            linkUrl={`/portfolio/${project._id}`}
          />
        ))}
      </div>

    </main>
  );
}
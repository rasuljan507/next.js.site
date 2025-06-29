export const revalidate = 0;

import { client } from '@/lib/sanity.client';
import ProjectCard from '@/components/ProjectCard';
import { urlFor } from '@/lib/sanity.image';

async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    mainImage
  }`;
  const projects = await client.fetch(query);
  return projects;
}

export default async function PortfolioListPage() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center text-white mb-12">
        Мои Проекты
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </main>
  );
}
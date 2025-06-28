import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  mainImage: SanityImageSource;
}

async function getProjects(): Promise<Project[]> {
  try {
    const query = `*[_type == "project"] | order(_createdAt desc){
      _id,
      title,
      mainImage
    }`;
    const projects = await client.fetch<Project[]>(query);
    return projects;
  } catch (error) {
    console.error('Ошибка при загрузке проектов:', error);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-16 md:py-24 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Мои Проекты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project._id} href={`/portfolio/${project._id}`}>
            <div className="group block border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300">
              <div className="relative w-full h-64">
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={`Изображение проекта ${project.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-gray-900">
                <h2 className="text-xl font-semibold truncate">{project.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
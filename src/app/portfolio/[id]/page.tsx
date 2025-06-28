import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import TelegramIcon from "@/components/TelegramIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import VKIcon from "@/components/VKIcon";
import InstaIcon from "@/components/InstaIcon";

interface Project {
  _id: string;
  title: string;
  mainImage: SanityImageSource;
  gallery?: SanityImageSource[];
  description: string;
  githubUrl?: string;
  liveUrl?: string;  
  serviceUrl: string;  
}

async function getProject(id: string): Promise<Project> {
    const query = `*[_type == "project" && _id == $id][0]{
      _id,
      title,
      mainImage,
      gallery,
      description,
      githubUrl,
      liveUrl,
      serviceUrl
    }`;

    const project = await client.fetch<Project | null>(query, { id });
    if (!project) {
        notFound();
    }
    return project;
}

type Props = {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPage({ params }: Props) {
  const { id } = params;
  const project = await getProject(id);

  return (
    <main className="container mx-auto px-4 py-16 md:py-24 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">{project.title}</h1>

      <div className="relative w-full h-[60vh] mb-12">
        <Image
          src={urlFor(project.mainImage).url()}
          alt={`Главное изображение проекта ${project.title}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">О проекте</h2>
        <p className="text-gray-400 text-lg whitespace-pre-line">{project.description}</p>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative w-full h-64">
                <Image
                  src={urlFor(image).url()}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* --- ИЗМЕНЕНИЕ 2: Обновляем логику отображения кнопок --- */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <span className="text-lg text-gray-300 hover:text-white cursor-pointer border border-gray-600 hover:border-white transition-colors px-8 py-3 rounded-lg">
              Смотреть вживую
            </span>
          </Link>
        )}
        
        {project.githubUrl && (
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-[#F95738] text-white py-3 px-8 rounded-lg hover:bg-opacity-90 cursor-pointer text-lg font-semibold">
              Код на GitHub
            </span>
          </Link>
        )}

        <Link href={project.serviceUrl} target="_blank" rel="noopener noreferrer">
          <span className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 cursor-pointer text-lg font-semibold transition-colors">
            Заказать услугу
          </span>
        </Link>
      </div>

      <div className="flex flex-row justify-center mt-16 pt-8 border-t border-gray-800 gap-6">
        <a href="https://t.me/rasdev_507" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <TelegramIcon className="w-7 h-7 text-gray-400 hover:text-[#26A5E4] transition-colors" />
        </a>
        <a href="https://wa.me/+79048911316" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <WhatsAppIcon className="w-7 h-7 text-gray-400 hover:text-[#25D366] transition-colors" />
        </a>
        <a href="https://vk.com/bla_huyova" target="_blank" rel="noopener noreferrer" aria-label="VK">
          <VKIcon className="w-7 h-7 text-gray-400 hover:text-[#4A76A8] transition-colors" />
        </a>
        <a href="https://www.instagram.com/rasuljan507" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstaIcon className="w-7 h-7 text-gray-400 hover:text-[#F0007C] transition-colors" />
        </a>
      </div>
    </main>
  );
}
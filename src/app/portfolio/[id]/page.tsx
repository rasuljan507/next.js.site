export const revalidate = 0;

import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import ContactCTA from "@/components/ContactCTA";
import ImageGallery from "@/components/ImageGallery";

interface Project {
  _id: string;
  title: string;
  mainImage: SanityImageSource;
  gallery?: SanityImageSource[];
  videoUrl?: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
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
      "videoUrl": video.asset->url
    }`;

  const project = await client.fetch<Project | null>(query, { id });
  if (!project) {
    notFound();
  }
  return project;
}

type Props = {
  params: { id: string };
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

      <ImageGallery gallery={project.gallery} />

      {project.videoUrl && (
        <div className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Видео Демонстрация</h2>
          <video
            src={project.videoUrl}
            controls
            loop
            autoPlay
            muted
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          >
            Ваш браузер не поддерживает видео тег.
          </video>
        </div>
      )}
      
      <div className="flex flex-wrap justify-center items-center gap-8">
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
      </div>

      <ContactCTA />
    </main>
  );
}
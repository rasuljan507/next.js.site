// Файл: src/app/portfolio/[id]/page.tsx

import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";

// Определяем тип данных для одного проекта, как он приходит из Sanity
interface Project {
  _id: string;
  title: string;
  mainImage: SanityImageSource;
  gallery?: SanityImageSource[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

// Асинхронная функция для получения данных одного проекта по его ID
async function getProject(id: string): Promise<Project | null> {
  try {
    const query = `*[_type == "project" && _id == $id][0]{
      _id,
      title,
      mainImage,
      gallery,
      description,
      githubUrl,
      liveUrl
    }`;
    const project = await client.fetch<Project>(query, { id });
    return project;
  } catch (error) {
    console.error('Ошибка при загрузке проекта:', error);
    return null;
  }
}

// Определяем тип для props, которые Next.js передает на страницу
// Это исправляет ошибку, которую показывал Vercel
type Props = {
  params: {
    id: string;
  };
};

// Сама страница. Она может быть асинхронной, чтобы использовать await
export default async function ProjectPage({ params }: Props) {
  // Получаем id из параметров страницы
  const { id } = params;
  // Загружаем данные для этого проекта
  const project = await getProject(id);

  // Если проект не найден, показываем сообщение
  if (!project) {
    return <div className="text-white text-center py-24">Проект не найден.</div>;
  }

  // Если все хорошо, отрисовываем страницу
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">{project.title}</h1>

      {/* Главное изображение */}
      <div className="relative w-full h-[60vh] mb-12">
        <Image
          src={urlFor(project.mainImage).url()}
          alt={`Главное изображение проекта ${project.title}`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Описание проекта */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">О проекте</h2>
        <p className="text-gray-400 text-lg whitespace-pre-line">{project.description}</p>
      </div>

      {/* Галерея, если она есть */}
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

      {/* Кнопки со ссылками */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <span className="text-lg text-gray-300 hover:text-white cursor-pointer border border-gray-600 hover:border-white transition-colors px-8 py-3 rounded-lg">
              Смотреть вживую
            </span>
          </Link>
        )}
        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <span className="inline-block bg-[#F95738] text-white py-3 px-8 rounded-lg hover:bg-opacity-90 cursor-pointer text-lg font-semibold">
            Код на GitHub
          </span>
        </Link>
      </div>
    </main>
  );
}
"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface ImageGalleryProps {
  gallery?: SanityImageSource[];
}

export default function ImageGallery({ gallery }: ImageGalleryProps) {

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  if (!gallery || gallery.length === 0) {
    return null;
  }
  
  const goToPrevious = useCallback(() => {
    if (currentIndex === null) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallery.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, gallery.length]);

  const goToNext = useCallback(() => {
    if (currentIndex === null) return;
    const isLastSlide = currentIndex === gallery.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, gallery.length]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, goToPrevious, goToNext]);


  return (
    <>
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Галерея</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-64 cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => openModal(index)}
            >
              <Image
                src={urlFor(image).width(400).height(400).url()}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white text-4xl bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center z-10"
            aria-label="Предыдущее изображение"
          >
            &#8249;
          </button>
          
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={urlFor(gallery[currentIndex]).url()}
              alt="Просмотр изображения"
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white text-4xl bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center z-10"
            aria-label="Следующее изображение"
          >
            &#8250;
          </button>
          
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Закрыть"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
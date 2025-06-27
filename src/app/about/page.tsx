import Image from 'next/image';
import Link from 'next/link';
import SkillsSection from  '@/components/SkillsSection';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 text-white">

      <section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Ключевые этапы</h2>
        <div className="mt-4 mb-16">
          <Image 
            src="/rasul-photo.jpg"
            alt="Фото Расула Юсуфалиева"
            width={150}
            height={150}
            className="rounded-full mx-auto ring-4 ring-orange-500/50" 
          />
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700"></div>

          {/* Элемент 1 (справа) */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-orange-500 ring-8 ring-[#1A1D23]"></div>
            <div className="md:w-5/12 md:ml-auto md:pl-12 text-left md:text-right">
              <h3 className="font-bold text-xl mb-1">Осознанный старт</h3>
              <p className="text-gray-400">Начал с углубленного изучения Python. Быстро перешел от теории к практике, создавая первые скрипты для автоматизации рутинных задач.</p>
            </div>
          </div> 

          {/* Элемент 2 (слева) */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-orange-500 ring-8 ring-[#1A1D23]"></div>
            <div className="md:w-5/12 md:mr-auto md:pr-12 text-left">
              <h3 className="font-bold text-xl mb-1">Практика в веб и автоматизации</h3>
              <p className="text-gray-400">Разработал несколько бэкенд-сервисов (REST API) и создал функциональных Telegram-ботов, получив практический опыт в веб-разработке.</p>
            </div>
          </div> 
        
          {/* Элемент 3 (справа) */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-orange-500 ring-8 ring-[#1A1D23]"></div>
            <div className="md:w-5/12 md:ml-auto md:pl-12 text-left md:text-right">
              <h3 className="font-bold text-xl mb-1">Full-stack и десктоп</h3>
              <p className="text-gray-400">Освоил C# для создания десктопных приложений. Параллельно начал активно изучать frontend (React, Next.js) для создания полноценных full-stack проектов. Этот сайт — результат.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Я нахожусь в начале своего пути и постоянно учусь новому. Лучший способ оценить мои навыки — посмотреть на код.
        </p>
        <div className="mb-16">
          <SkillsSection />
        </div>
        <Link href="/portfolio">
          <span className="inline-block bg-[#F95738] text-white py-3 px-8 rounded-lg hover:bg-opacity-90 cursor-pointer text-lg font-semibold">
            Посмотреть мои проекты
          </span>
        </Link>
      </section>
    </main>
  );
}
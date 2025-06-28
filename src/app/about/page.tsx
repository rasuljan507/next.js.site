import Image from 'next/image';
import Link from 'next/link';
import SkillsSection from  '@/components/SkillsSection';

const timelineData = [
  {
    title: 'Осознанный старт',
    description: 'Начал с углубленного изучения Python. Быстро перешел от теории к практике, создавая первые скрипты для автоматизации рутинных задач.',
  },
  {
    title: 'Практика в веб и автоматизации',
    description: 'Разработал несколько бэкенд-сервисов (REST API) и создал функциональных Telegram-ботов, получив практический опыт в веб-разработке.',
  },
  {
    title: 'Full-stack и десктоп',
    description: 'Освоил C# для создания десктопных приложений. Параллельно начал активно изучать frontend (React, Next.js) для создания полноценных full-stack проектов. Этот сайт — результат.',
  }
];

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

        <div className="timeline-container relative max-w-3xl mx-auto">
          <div className="timeline-line absolute left-1/2 top-0 h-full w-0.5 bg-gray-700"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item relative mb-12">
              {/* Точка на линии */}
              <div className="timeline-dot absolute left-1/2 top-1.5 -ml-3 w-6 h-6 rounded-full bg-orange-500 border-4 border-[#1A1D23]"></div>
              
              {/* Контент, который меняет положение */}
              <div 
                className={`timeline-content md:w-5/12 
                  ${index % 2 === 0 ? 'md:ml-auto md:pl-12 text-left' : 'md:mr-auto md:pr-12 text-right'}`
                }
              >
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
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
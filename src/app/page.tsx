
import Link from 'next/link';
import TelegramIcon from '@/components/TelegramIcon';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import VKIcon from '@/components/VKIcon';
import InstIcon from '@/components/InstaIcon';
import AnimatedHero from '@/components/AnimatedHero'; 

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">

        {/* Иконки соцсетей (адаптивные) */}
        <div className="flex flex-row md:flex-col gap-6 order-last md:order-first mt-8 md:mt-0">
          <a href="https://t.me/rasdev_507" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <TelegramIcon className="w-7 h-7 text-gray-400 hover:text-[#26A5E4] transition-colors" />
          </a>
          <a href="https://wa.me/+79048911316" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon className="w-7 h-7 text-gray-400 hover:text-[#25D366] transition-colors" />
          </a>
          <a href="https://vk.com/bla_huyova" target="_blank" rel="noopener noreferrer" aria-label="VK">
            <VKIcon className="w-7 h-7 text-gray-400 hover:text-[#4B88E4] transition-colors" />
          </a>
          <a href="https://www.instagram.com/rasuljan_507" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstIcon className="w-7 h-7 text-gray-400 hover:text-[#FF0069] transition-colors" />
          </a>
        </div>

        {/* Центральный блок (адаптивный) */}
        <div className="border border-[#8A3324] p-6 md:p-8 rounded-lg flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Расул Юсуфалиев
            </h1>
            <p className="text-base md:text-lg text-gray-400 mt-2">
              Портфолио
            </p>
            <Link href="/about">
              <button className="mt-6 bg-[#F95738] text-white py-2 px-6 rounded-lg hover:bg-opacity-90 cursor-pointer">
                Обо мне
              </button>
            </Link>
          </div>
          <AnimatedHero className="w-full max-w-xs md:max-w-sm shrink-0 mt-8 lg:mt-0" />
        </div>
        
      </div>
    </main>
  );
}
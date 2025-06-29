"use client"; 

import { useState } from 'react';
import TelegramIcon from '@/components/TelegramIcon';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import VKIcon from '@/components/VKIcon';
import InstaIcon from '@/components/InstaIcon';

export default function ContactCTA() {
  
  const [showIcons, setShowIcons] = useState(false);

  
  const handleToggleIcons = () => {
    setShowIcons(!showIcons); 
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-16">
      {/* Наша главная кнопка */}
      <button
        onClick={handleToggleIcons}
        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 cursor-pointer text-lg font-semibold transition-all duration-300"
      >
        Заказать услугу
      </button>

      {/* Блок с иконками, который показывается только если showIcons === true */}
      {showIcons && (
        <div className="flex flex-row justify-center items-center gap-6 p-4 border border-gray-700 rounded-lg bg-gray-900/50">
          <a href="https://t.me/rasdev_507" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <TelegramIcon className="w-8 h-8 text-gray-400 hover:text-[#26A5E4] transition-colors" />
          </a>
          <a href="https://wa.me/+79048911316" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon className="w-8 h-8 text-gray-400 hover:text-[#25D366] transition-colors" />
          </a>
          <a href="https://vk.com/bla_huyova" target="_blank" rel="noopener noreferrer" aria-label="VK">
            <VKIcon className="w-8 h-8 text-gray-400 hover:text-[#4A76A8] transition-colors" />
          </a>
          <a href="https://www.instagram.com/rasuljan507" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstaIcon className="w-8 h-8 text-gray-400 hover:text-[#F0007C] transition-colors" />
          </a>
        </div>
      )}
    </div>
  );
}
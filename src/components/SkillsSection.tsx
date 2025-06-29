import ReactIcon from './ReactIcon';
import PythonIcon from './PythonIcon';
import HTML5Icon from './HTML5Icon'
import CSSIcon from './CSS';
import NodeJsIcon from './NodeJs';
import UnityIcon from './UnityIcon';

const SkillsSection = () => {
  return (

        <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold text-white mb-16">
            Мои навыки
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">

            <div className="flex flex-col items-center gap-3 group">
                <ReactIcon className="w-16 h-16 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">React</p>
            </div>

            <div className="flex flex-col items-center gap-3 group">
                <PythonIcon className="w-16 h-16 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">Python</p>
            </div>

            <div className="flex flex-col items-center gap-3 group">
                <HTML5Icon className="w-16 h-16 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">HTML5</p>
            </div>

            <div className="flex flex-col items-center gap-3 group">
                <CSSIcon className="w-16 h-16 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">CSS</p>
            </div>

            <div className="flex flex-col items-center gap-3 group">
                <NodeJsIcon className="w-16 h-16 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">Node.js</p>
            </div>

            <div className="flex flex-col items-center gap-3 group">
                <UnityIcon className="w-16 h-16 text-[#C0C0C0] group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-400">Unity</p>
            </div>

            </div>
        </div>
        </section>
  );
};

export default SkillsSection;
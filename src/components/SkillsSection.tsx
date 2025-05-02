import React from 'react';
import { motion } from 'framer-motion';
import gif from '../assets/Programming123najra.gif';

const hardSkills = [
  { name: 'HTML5', logo: 'https://imgs.search.brave.com/eebNUPJ6ONPm56zyF1mPB-HqAIQsiLpwhmNrAsSaKdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw' },
  { name: 'CSS3', logo: 'https://imgs.search.brave.com/kTKvDjFg8uSx56pZHmcFxgYwJRkOlbH6oHO9WSe8TFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc' },
  { name: 'JavaScript', logo: 'https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn' },
  { name: 'TypeScript', logo: 'https://imgs.search.brave.com/b1mza9u8ePJdo9VHfx00bmjzGwVI_b7cLPA1ONSjIL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRjL1R5cGVzY3Jp/cHRfbG9nb18yMDIw/LnN2Zw' },
  { name: 'React', logo: 'https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n' },
  { name: 'TailwindCSS', logo: 'https://imgs.search.brave.com/3EeDSn_qoSVIvgjAoi3s6DN5NycGE2G8t4uSMTO2NIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2dl/dC1pY29uL2dldGlj/b24vbWFzdGVyL2lj/b25zL3RhaWx3aW5k/Y3NzLWljb24uc3Zn' },
  { name: 'Sass', logo: 'https://imgs.search.brave.com/mer7TJf5AUZ6eObxi989K06gOrZ8l0AyfXPOfmmK5r8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1Nhc3NfTG9n/b19Db2xvci5zdmc' },
  { name: 'Bootstrap', logo: 'https://imgs.search.brave.com/-2nvjLwHCLERDqSg1_AgIe3PCTRQa2y2NNDTNqzCDUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXRi/b290c3RyYXAuY29t/L2RvY3MvNS4wL2Fz/c2V0cy9icmFuZC9i/b290c3RyYXAtbG9n/by5zdmc' },
  { name: 'Node.js', logo: 'https://imgs.search.brave.com/NVZxcNW8dtnRNm7DwJqdUceHPg1J4isHZFcDLq6uKZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tOTA5eDEw/MjQtaWc0Z205azcu/cG5n' },
  { name: 'Express.js', logo: 'https://imgs.search.brave.com/xrlC1uXtSPUvNS04cqCkzQIpEovjb82W_vItjxceu4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VheWVyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvZXhwcmVzc2pz/LWxvZ28uc3Zn' },
  { name: 'Java', logo: 'https://imgs.search.brave.com/7fWL_xYWat7R6dmjIixtrFGpMcUQPMQtQG87EMy-m1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/MTgxX0phdmFfbG9n/b19sb2dvcy01MTIu/cG5n' },
  { name: 'Spring Boot', logo: 'https://imgs.search.brave.com/PDsYeYpj9PoR7JEEwYnPSpBaWH5G9tPRYajJt4C-Yw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc5L1NwcmluZ19C/b290LnN2Zw' },
  { name: 'SQL', logo: 'https://imgs.search.brave.com/OyPVdVGhpYKT-x3gFEleSM7-8oTLV2D85SPeFqGmeAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjQxNS9Q/TkcvNTEyL215c3Fs/X29yaWdpbmFsX2xv/Z29faWNvbl8xNDY0/MTYucG5n' },
  { name: 'Git', logo: 'https://imgs.search.brave.com/99DvOeuXimzYQiTnOkoQDesvKFGmrOG9wZLIo1SPnY0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9naXQtaWNvbi5z/dmc' },
];

const languages = [
  { name: 'Portuguese', level: 'Native / Fluent', flag: 'https://imgs.search.brave.com/5HVTtiV7Opi3S7_cv1PuRIO5x7ELSiyjmyHufc-9rxk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMS5z/dGF0aWMuYnJhc2ls/ZXNjb2xhLnVvbC5j/b20uYnIvYmUvY29u/dGV1ZG8vaW1hZ2Vz/LzItYmFuZGVpcmEt/ZG8tYnJhc2lsLmpw/Zw' },
  { name: 'English', level: 'Advanced', flag: 'https://imgs.search.brave.com/MyyoRmNgSfd1syh8vS2Hz_YWKKO6Xes-bwSWY8wywgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29tcHJhcmJhbmRl/cmFzLmVzL2ltYWdl/cy9iYW5kZXJhcy80/MDAvNjEtZXN0YWRv/cy11bmlkb3NfNDAw/cHguanBn' },
];

const softSkills = [
  'Teamwork',
  'Communication',
  'Problem-solving',
  'Leadership',
  'Critical thinking',
  'Organization',
  'Empathy',
];

const SkillsSection: React.FC = () => {
  return (
    <section className="min-h-screen text-white flex flex-col items-center py-12 px-6 " id="skills">
      <motion.h2
        className="text-5xl font-bold mb-12 text-center text-white tracking-wider"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        MY SKILLS
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-16 w-full max-w-7xl items-center">
        {/* Left Side: GIF */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={gif} alt="Coding GIF" className="rounded-xl w-full max-w-md shadow-lg shadow-purple-700/50" />
        </motion.div>

        {/* Right Side: Skills Grid */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hard Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Hard Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {hardSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain" />
                  <span className="text-sm mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-3">
                  <img src={lang.flag} alt={lang.name} className="w-8 h-5 object-cover rounded" />
                  <div>
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-gray-400">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Soft Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside text-sm text-gray-300">
              {softSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;














import React from 'react';
import { motion } from 'framer-motion';

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
    <section className="min-h-screen px-6 py-20  text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MY SKILLS
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center text-center md:items-start gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">HARD SKILLS</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-9">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1e1e2f] p-4 rounded-xl shadow-md hover:shadow-purple-500/40 transition-shadow flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={skill.logo} alt={skill.name} className="h-12 w-12 mb-2" />
                  <span className="text-sm text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-4 text-purple-400">SOFT SKILLS</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-7 ">
              {softSkills.map((skill, index) => (
                <li key={index} className="bg-[#292a3e] px-4 py-3 rounded-full text-center text-1xl  shadow-md hover:shadow-purple-500/40 transition-shadow">
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mt-12 mb-4 text-purple-400">LANGUAGES</h3>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center text-center justify-center gap-3 bg-[#292a3e] px-4 py-3 rounded-xl border border-purple-600 min-w-60">
                  <img src={lang.flag} alt={lang.name} className="h-8 w-10 rounded-sm" />
                  <div>
                    <p className="text-[20px] font-semibold">{lang.name}</p>
                    <p className="text-[15px] text-gray-300">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;